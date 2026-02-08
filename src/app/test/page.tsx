"use client";
import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

export default function HomePage() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data: items, error } = await supabase.from("users").select("*");
      if (!error) setData(items || []);
    };
    fetchData();
  }, [supabase]);

  return (
    <div>
      <h1>Test</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}
