// app/(dashboard)/developer/page.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useUserRole } from '@/lib/hooks/api'

const features = [
	{ id: "tax-calculator", name: "Tax Calculator", description: "Enable the Australian tax calculator feature" },
	{
		id: "multi-currency",
		name: "Multi-Currency Support",
		description: "Allow handling multiple currencies in payrolls",
	},
	{ id: "advanced-reports", name: "Advanced Reporting", description: "Enable advanced payroll reporting features" },
	{
		id: "employee-portal",
		name: "Employee Self-Service Portal",
		description: "Provide a portal for employees to access their payroll information",
	},
]

export default function DeveloperPage() {
	const { isDeveloper, isAdmin } = useUserRole()
	const [enabledFeatures, setEnabledFeatures] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const toggleFeature = (featureId: string) => {
		setEnabledFeatures((prev) =>
			prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
		)
	}

	const handleSave = async () => {
		setIsLoading(true)

		try {
			// Here you would typically save the enabled features to your backend
			await fetch("/api/developer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					operation: "update_features",
					features: enabledFeatures,
				}),
			})

			toast.success("Feature toggles saved successfully!")
		} catch (error) {
			console.error("Error saving features:", error)
			toast.error("Failed to save feature toggles")
		} finally {
			setIsLoading(false)
		}
	}

	// Add role-based access control
	if (!isDeveloper && !isAdmin) {
		return (
			<div className="space-y-6">
				<h2 className="text-3xl font-bold tracking-tight">Developer Settings</h2>
				<Card>
					<CardContent className="py-8">
						<p className="text-center text-muted-foreground">
							You don't have permission to access developer settings.
						</p>
					</CardContent>
				</Card>
			</div>
		)
	}

	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Developer Settings</h2>
				<p className="text-muted-foreground">Manage feature toggles and developer options</p>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Feature Toggles</CardTitle>
					<CardDescription>Enable or disable features in the application</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{features.map((feature) => (
							<div key={feature.id} className="flex items-center justify-between">
								<div className="space-y-0.5">
									<Label htmlFor={feature.id}>{feature.name}</Label>
									<p className="text-sm text-muted-foreground">{feature.description}</p>
								</div>
								<Switch
									id={feature.id}
									checked={enabledFeatures.includes(feature.id)}
									onCheckedChange={() => toggleFeature(feature.id)}
								/>
							</div>
						))}
					</div>
					<Button onClick={handleSave} className="mt-6" disabled={isLoading}>
						{isLoading ? "Saving..." : "Save Changes"}
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}