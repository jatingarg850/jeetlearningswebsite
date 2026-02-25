export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#EEEEEE] py-5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p
            className="font-poppins text-sm leading-[20.44px] tracking-[0.1px]"
            style={{ color: "#757557" }}
          >
            Copyright © 2025 Canam Group All rights reserved.
          </p>
          <p
            className="font-poppins text-sm leading-[20.44px] tracking-[0.1px]"
            style={{ color: "#757557" }}
          >
            Disclaimer &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms &
            Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
