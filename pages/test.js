import "twind/shim";
import { tw } from "twind";
export default function TestPage() {
  return (
    <div>
      <div>Hello Sara. </div>
      <button classNames={tw`bg-red-500 p-2 m-2 text-white`}>Hallo Welt</button>
      <img
        style={{ width: "320px" }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fnew-york-17.jpg&f=1&nofb=1"
      ></img>
    </div>
  );
}
