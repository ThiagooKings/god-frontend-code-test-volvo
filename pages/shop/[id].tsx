import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Model ID: {id}</h1>;
}
