import Image from 'next/image';

const AVATARS = [
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
];

export function SocialProof() {
  return (
    <div className="flex items-center gap-4 bg-white/5 py-3 px-5 rounded-full border border-white/5 w-fit hover:bg-white/10 transition-colors cursor-default">
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <div
            key={i}
            className="relative w-10 h-10 rounded-full border-2 border-forest-green overflow-hidden transition-transform hover:scale-110 hover:z-10 bg-forest-green"
          >
            <Image
              src={src}
              alt={`Fornecedor ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green border-2 border-forest-green text-forest-green font-bold text-xs hover:scale-110 transition-transform">
          +500
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
          <p className="font-bold text-white text-sm">Fornecedores</p>
        </div>
        <p className="text-xs text-gray-400">confiam no Gado 11</p>
      </div>
    </div>
  );
}
