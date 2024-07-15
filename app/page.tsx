"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useOrganization,
  useUser,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const { organization } = useOrganization();
  const { user } = useUser();

  const orgId = organization ? organization.id : user ? user.id : null;
  const files = useQuery(api.files.getFiles, orgId ? { orgId } : "skip");
  const createFile = useMutation(api.files.createFile);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        {/* <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton> */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}
      <Button
        onClick={() => {
          if (!orgId) return;
          createFile({ name: "test", orgId });
        }}
      >
        Create File
      </Button>
    </main>
  );
}
