import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-lg">
      <div>
        Todo application
        <br />
        <Link className="m-2 border text-md" href="/signin">
          Sign in to Todo app
        </Link>
        <br />
        <Link className="m-2 border text-md" href="/signup">
          Sign up to Todo app
        </Link>
      </div>
    </div>
  );
}
