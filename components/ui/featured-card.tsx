import { Card } from "./card";

// Reusable FeatureCard Component
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    cardClassName?: string;
}

export default function FeatureCard({ icon, title, cardClassName }: FeatureCardProps) {
    return (
        <Card className={`${cardClassName} p-3 bg-white hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3 cursor-pointer`}>
            <div className="bg-gray-100 p-2 rounded-sm ring-1 ring-gray-200">
                {icon}
            </div>
            <p className="text-sm font-medium text-gray-700">
                {title}
            </p>
        </Card>
    );
}