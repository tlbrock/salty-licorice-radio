"use client";

import { Pagination } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function PaginationControl({ totalPages, currentPage }: { totalPages: number; currentPage: number }) {
    const router = useRouter();

    return (
        <Pagination>
            <Pagination.Content className="flex gap-2">
                <Pagination.Item>
                    <Pagination.Previous
                        className=" cursor-pointer"
                        isDisabled={currentPage === 1}
                        onPress={() => router.push(`/page/${currentPage - 1}`)}
                    >
                        <Pagination.PreviousIcon />
                    </Pagination.Previous>
                </Pagination.Item>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Pagination.Item key={p}>
                        <Pagination.Link
                            className={`cursor-pointer ${currentPage === p ? "font-bold underline" : ""}`}
                            isActive={currentPage === p}
                            onPress={() => router.push(`/page/${p}`)}
                        >
                            {p}
                        </Pagination.Link>
                    </Pagination.Item>
                ))}

                <Pagination.Item>
                    <Pagination.Next
                        className=" cursor-pointer"
                        isDisabled={currentPage === totalPages}
                        onPress={() => router.push(`/page/${currentPage + 1}`)}
                    >
                        <Pagination.NextIcon />
                    </Pagination.Next>
                </Pagination.Item>
            </Pagination.Content>
        </Pagination >
    )
}