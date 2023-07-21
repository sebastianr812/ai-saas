'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: 'Sebastian',
        avatar: 'S',
        title: 'Software Engineer',
        description: 'This is the best AI tool that I have used!'
    },
    {
        name: 'Sierra',
        avatar: 'S',
        title: 'Hair Stylist',
        description: 'This application helped me determine what hair type someone had'
    },
    {
        name: 'Serafina',
        avatar: 'S',
        title: 'Hair Salon Owner',
        description: 'This tool cut down the time it takes to do payroll'
    },
    {
        name: 'Antonio',
        avatar: 'A',
        title: 'Mechanical Engineer',
        description: 'I was able to delegate small tasks to this AI in order to focus on other aspects of the job'
    },
]

const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="mb-10 text-4xl font-extrabold text-center text-white">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {testimonials.map((t) => (
                    <Card
                        key={t.description}
                        className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">
                                        {t.name}
                                    </p>
                                    <p className="text-sm text-zinc-400">{t.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="px-0 pt-4">
                                {t.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}

            </div>
        </div>
    );
}

export default LandingContent;