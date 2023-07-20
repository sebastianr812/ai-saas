'use client';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useProModal from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import { Check, Code, Image, MessageSquare, Music, VideoIcon, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const tools = [
    {
        label: 'Conversation',
        icon: MessageSquare,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',

    },
    {
        label: 'Music Generation',
        icon: Music,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-500/10',
    },
    {
        label: 'Image Generation',
        icon: Image,
        color: 'text-pink-700',
        bgColor: 'bg-pink-700/10',
    },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        color: 'text-orange-700',
        bgColor: 'bg-orange-700/10',
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
    },
]


const ProModal = () => {

    const proModal = useProModal();
    const [loading, setLoading] = useState(false);

    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/stripe');

            window.location.href = response.data.url
        } catch (e) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex flex-col items-center justify-center gap-y-4">
                        <div className="flex items-center py-2 font-bold gap-x-2">
                            Upgrade to Jarvis
                            <Badge variant='premium' className="py-1 text-sm uppercase">
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="pt-2 space-y-2 font-medium text-center text-zinc-900">
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="flex items-center justify-between p-3 border-black/5">
                                <div className="flex items-center gap-x-4">
                                    <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                                        <tool.icon className={cn('w-6 h-6', tool.color)} />
                                    </div>
                                    <div className="text-sm font-semibold">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="w-5 h-5 text-primary" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter >
                    <Button disabled={loading} onClick={onSubscribe} className="w-full" size='lg' variant='premium'>
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ProModal;