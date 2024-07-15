import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="container mx-auto flex justify-between items-center">
        FileDrive
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
