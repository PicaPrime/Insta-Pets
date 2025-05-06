import { useFormStatus } from "react-dom";
import { Puppy } from "../assets/data";

type puppyFormProps = {
  puppies: Puppy[];
  setPuppies: React.Dispatch<React.SetStateAction<Puppy[]>>;
};

function PuppyForm({ setPuppies, puppies }: puppyFormProps) {
  return (
    <>
      <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
        <form
          className="mt-4 flex w-full flex-col items-start gap-4"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   const formData = new FormData(e.target);

          //   // using FormData
          //   // const name = formData.get("name");
          //   // const trait = formData.get("trait");
          //   // console.log({name, trait});

          //   // using Object
          //   // const puppy = Object.fromEntries(formData);
          //   // console.log(puppy);

          // }}

          // using react

          action={async (formData: FormData) => {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log(Object.fromEntries(formData));
            const newPuppy: Puppy = {
              id: (puppies.length + 1) as number,
              name: formData.get("name") as string,
              trait: formData.get("trait") as string,
              imagePath: `images/${Math.floor(Math.random() * 16) + 7}.jpg`,
            };

            setPuppies([...puppies, newPuppy]);
          }}
        >
          <div className="grid w-full gap-6 md:grid-cols-3">
            <fieldset className="flex w-full flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="name"
                type="text"
                name="name"
              />
            </fieldset>
            <fieldset className="flex w-full flex-col gap-1">
              <label htmlFor="trait">Personality trait</label>
              <input
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="trait"
                type="text"
                name="trait"
              />
            </fieldset>
            <fieldset
              disabled
              className="col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50"
            >
              <label htmlFor="avatar_url">Profile pic</label>
              <input
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="avatar_url"
                type="file"
                name="avatar_url"
              />
            </fieldset>
          </div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
}

function SubmitButton() {
  const status = useFormStatus();
  return (
    <>
      <button
        className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none disabled:bg-state-200 disabled:cursor-not-allowed"
        type="submit"
        disabled={status.pending}
      >
        {/* {status.pending ? "Adding Puppy..." : "Add Puppy"} */}

        {status.pending ? `Adding ${status?.data?.get("name") || "puppy"}...` : "Add Puppy"}
      </button>
    </>
  );
}

export default PuppyForm;
