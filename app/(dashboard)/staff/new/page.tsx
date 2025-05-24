"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

import { Button, Input, Label, Select, SelectItem } from "@/components/ui";

export default function CreateUserPage() {
  const router = useRouter();
  const { getToken } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "viewer",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    
    if (e.target.name === "role") {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else { setForm({ ...form, [e.target.name]: e.target.value });}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = await getToken({ template: "hasura" });

      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to create user");

      router.push("/users"); // Redirect to user list
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create New User</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label>Email</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label>Password</Label>
          <Input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label>First Name</Label>
          <Input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label>Last Name</Label>
          <Input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label>Role</Label>
          <Select onValueChange={(value) => setForm({...form, role: value})} defaultValue={form.role} >
              <SelectItem value="org_admin">Admin</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="consultant">Consultant</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
          </Select>
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create User"}
        </Button>
      </form>
    </div>
  );
}
