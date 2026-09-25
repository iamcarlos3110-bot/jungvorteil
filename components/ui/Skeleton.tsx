import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function SkeletonBox({ className, width, height }: SkeletonProps) {
  return (
    <div
      className={cn("skeleton rounded-md bg-gray-200", className)}
      style={{ width, height }}
    />
  );
}

export function OfferCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full flex flex-col gap-3", className)}>
      <div className="flex justify-between items-start">
        <SkeletonBox width={48} height={48} className="rounded-xl" />
        <SkeletonBox width={60} height={20} className="rounded-full" />
      </div>
      <div className="mt-2 flex-grow flex flex-col gap-2">
        <SkeletonBox width="80%" height={24} />
        <SkeletonBox width="60%" height={20} />
      </div>
      <div className="flex gap-2 my-3">
        <SkeletonBox width={80} height={20} className="rounded-full" />
        <SkeletonBox width={80} height={20} className="rounded-full" />
      </div>
      <SkeletonBox width="100%" height={40} className="rounded-xl mt-auto" />
    </div>
  );
}

export function CategorySkeleton({ className }: { className?: string }) {
  return (
    <SkeletonBox width={120} height={40} className={cn("rounded-full", className)} />
  );
}
