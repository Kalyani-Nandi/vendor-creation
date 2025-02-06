import React from "react";

function Footer() {
  return (
    <footer className=" text-gray-900 py-6 text-center">
      <p className="text-sm">
        Made with ❤️ by the team at{" "}
        <strong className="text-blue-400">JS Tigers</strong>
      </p>
      <p className="text-xs mt-2">
        &copy; {new Date().getFullYear()} JS Tigers. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
