import Image from "next/image";
import Link from "next/link";

const PrevPageBtn = () => {
  return (
    <div>
      <Link href="/projects" className="flex items-center gap-3 ">
        <div className="h-6 w-6 md:h-10 md:w-10 p-1 md:p-2 rounded-full border-2 border-[var(--text-secondary)] ">
          <Image
            height={200}
            width={200}
            src="/icons/ic_arrow_left.svg"
            alt="icon arrow left"
            className="w-full h-full"
          />
        </div>

        <span className="font-semibold text-[var(--dark-grey)]">
          BACK TO PROJECTS
        </span>
      </Link>
    </div>
  );
};

export default PrevPageBtn;
