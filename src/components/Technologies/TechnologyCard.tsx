import { FaStar } from "react-icons/fa";
import type { Technology } from "../../type/technology";

interface TechnologyCardProps {
    technology: Technology;
    stack: Technology[];
    handleAddToStack: (technology: Technology) => void;
}

const TechnologyCard = ({
    technology,
    stack,
    handleAddToStack,
}: TechnologyCardProps) => {
    const isAdded = stack.some((item) => item.id === technology.id);

    return (
        <div className="flex min-h-[260px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                />

                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-500">
                    {technology.badge}
                </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {technology.name}
            </h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">
                {technology.description}
            </p>

            <div className="mt-auto">
                <div className="my-4 border-t border-slate-100" />
                <div className="mb-4 flex items-center justify-between gap-2 text-[10px] text-slate-500">
                    <span className="rounded bg-slate-50 px-2 py-1">
                        {technology.category}
                    </span>

                    <span>{technology.difficulty}</span>

                    <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />

                        {technology.rating}
                    </span>
                </div>

                <button
                    onClick={() => handleAddToStack(technology)}
                    disabled={isAdded}
                    className={`w-full rounded-md py-2.5 text-xs font-medium transition ${isAdded
                        ? "cursor-not-allowed bg-slate-300 text-slate-500"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                        }`}
                >
                    {isAdded ? "Added" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;
