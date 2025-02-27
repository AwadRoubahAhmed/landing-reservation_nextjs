export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 text-center p-2">
      <p>
        {" "}
        &copy; {new Date().getFullYear()} Landing Reservation. All rights
        reserved.
      </p>
    </footer>
  );
}
