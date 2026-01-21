"use client";

import Link from "next/link";


export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-6">CollabTrack</h2>

      <nav className="space-y-2">
        <Link href="/dashboard" className="block text-gray-700">
          Dashboard
        </Link>
        <Link href="/projects" className="block text-gray-700">
          Projects
        </Link>
        <Link href="/tasks" className="block text-gray-700">
          Tasks
        </Link>
      </nav>
    </aside>
  );
}
