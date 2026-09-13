import { use, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../../type/technology";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";
interface TechType {
    techPromise: Promise<Technology[]>;
}

const Technologies = ({ techPromise }: TechType) => {
    const technologies = use(techPromise);

    const [stack, setStack] = useState<Technology[]>([]);

    const handleAddToStack = (technology: Technology) => {
        const alreadyAdded = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.error(`${technology.name} already added`);
            return;
        }

        setStack([...stack, technology]);

        toast.success(`${technology.name} added to stack`);
    };

    const handleRemove = (id: string) => {
        const selectedTechnology = stack.find(
            (item) => item.id === id
        );

        const remainingStack = stack.filter(
            (item) => item.id !== id
        );

        setStack(remainingStack);

        if (selectedTechnology) {
            toast.success(
                `${selectedTechnology.name} removed from stack`
            );
        }
    };

    const handleRemoveAll = () => {
        if (stack.length === 0) {
            toast.error("Stack is already empty");
            return;
        }

        setStack([]);

        toast.success("All technologies removed");
    };

    return (
        <section
            id="technologies"
            className="bg-white py-14"
        >
            <div className="mx-auto max-w-[1120px] px-5">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-950">
                        Explore the{" "}
                        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                        Pick technologies to build your ideal stack.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                stack={stack}
                                handleAddToStack={handleAddToStack}
                            />
                        ))}
                    </div>
                    <Stack
                        stack={stack}
                        handleRemove={handleRemove}
                        handleRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </section>
    );
};

export default Technologies;