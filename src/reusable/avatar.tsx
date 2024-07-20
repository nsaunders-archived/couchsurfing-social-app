import Image from "next/image";

export function Avatar({ size, userId }: { size: 32 | 48; userId: string }) {
  return (
    <Image
      src={`https://i.pravatar.cc/48?u=${userId}`}
      alt={userId}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  );
}
