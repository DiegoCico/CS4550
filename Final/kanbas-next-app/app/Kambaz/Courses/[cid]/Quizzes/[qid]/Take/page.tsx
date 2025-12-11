"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TakeRedirectPage() {
  const { cid, qid } = useParams();
  const router = useRouter();

  useEffect(() => {
    // Redirect back to quiz detail page
    router.push(`/Kambaz/Courses/${cid}/Quizzes/${qid}`);
  }, [cid, qid, router]);

  return (
    <div className="p-6">
      <p>Redirecting to quiz...</p>
    </div>
  );
}
