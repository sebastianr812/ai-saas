import { auth } from "@clerk/nextjs";
import prismaDB from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";
import { NextResponse } from "next/server";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return
    }

    const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where: {
            userId
        }
    });

    if (userApiLimit) {
        await prismaDB.userApiLimit.update({
            where: {
                userId
            },
            data: {
                count: userApiLimit.count + 1
            }
        })
    } else {
        await prismaDB.userApiLimit.create({
            data: {
                userId,
                count: 1
            }
        });
    }
}

export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where: {
            userId
        }
    });

    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
        return true;
    } else {
        return false;
    }
}

export const getApiLimitCount = async () => {
    const { userId } = auth();

    if (!userId) {
        return 0;
    }
    const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where: {
            userId
        }
    });

    if (!userApiLimit) {
        return 0;
    }

    return userApiLimit.count;
}