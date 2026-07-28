import type { Metadata } from "next";
import { AdminPanel } from "./AdminPanel";

export const metadata: Metadata = { title: "Administration" };

export default function AdminPage() {
  return <AdminPanel />;
}
