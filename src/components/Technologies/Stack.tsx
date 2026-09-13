import { IoClose } from "react-icons/io5";

import type { Technology } from "../../type/technology";

interface StackProps {
    stack: Technology[];
    handleRemove: (id: string) => void;
    handleRemoveAll: () => void;
}

const Stack = ({
    stack,
    handleRemove,
    handleRemoveAll,
}: StackProps) => {
    return (
        <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">
                Your Stack
            </h3>

            <p className="mt-1 text-xs text-slate-400">
                {stack.length}{" "}
                {stack.length === 1
                    ? "Technology"
                    : "Technologies"}{" "}
                Selected
            </p>
            <div className="mt-4 space-y-2">
                {stack.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-slate-200 p-5 text-center">
                        <p className="text-xs text-slate-400">
                            No technologies selected
                        </p>
                    </div>
                ) : (
                    stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-7 w-7 object-contain"
                                />

                                <div>
                                    <p className="text-xs font-semibold text-slate-800">
                                        {technology.name}
                                    </p>

                                    <p className="text-[10px] text-slate-400">
                                        {technology.category}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() =>
                                    handleRemove(technology.id)
                                }
                                className="text-xl text-slate-400 transition hover:text-red-500"
                            >
                                <IoClose />
                            </button>
                        </div>
                    ))
                )}
            </div>
            <button
                onClick={handleRemoveAll}
                disabled={stack.length === 0}
                className="mt-6 w-full rounded-md border border-red-300 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Remove All
            </button>
        </div>
    );
};

export default Stack;