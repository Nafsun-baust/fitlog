import banner from "@/assets/banner.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gray-950 text-white px-6 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div>
                    <p className="text-lime-400 text-sm font-semibold mb-4">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mb-5">
                        TRAIN WITH INTENT.LOG <br /> EVERY SET.

                    </h1>

                    <p className="text-gray-400 mb-6">
                        FitLog is a dark, no-nonsense gym companion:
                        pick a lift, lock it <br /> into today's plan, and
                        watch the week's work add up.
                    </p>

                    <a
                        href="#library"
                        className="inline-block bg-lime-400 text-black px-6 py-3 rounded font-semibold"
                    >
                        BROWSE WORKOUTS →
                    </a>
                </div>

                <div>
                    <Image
                        src={banner}
                        alt="Workout Banner"
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
