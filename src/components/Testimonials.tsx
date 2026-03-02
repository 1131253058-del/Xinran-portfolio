export default function Testimonials() {
  const words = [
    { text: '用', color: 'border-pink-500' },
    { text: '产', color: 'border-pink-500' },
    { text: '品', color: 'border-pink-500' },
    { text: '创', color: 'border-pink-500' },
    { text: '造', color: 'border-pink-500' },
    { text: '价', color: 'border-pink-500' },
    { text: '值', color: 'border-pink-500' },
    { text: '，', color: 'border-pink-500' },
    { text: '用', color: 'border-blue-500' },
    { text: '美', color: 'border-blue-500' },
    { text: '食', color: 'border-blue-500' },
    { text: '犒', color: 'border-blue-500' },
    { text: '赏', color: 'border-blue-500' },
    { text: '生', color: 'border-blue-500' },
    { text: '活', color: 'border-blue-500' },
    { text: '，', color: 'border-blue-500' },
    { text: '用', color: 'border-green-500' },
    { text: '游', color: 'border-green-500' },
    { text: '戏', color: 'border-green-500' },
    { text: '治', color: 'border-green-500' },
    { text: '愈', color: 'border-green-500' },
    { text: '灵', color: 'border-green-500' },
    { text: '魂', color: 'border-green-500' },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center space-y-12">
      <div className="flex flex-wrap justify-center items-center gap-3">
        {words.map((word, index) => (
          <span
            key={index}
            className="relative font-black text-xl lg:text-2xl"
            style={{
              transform: `rotate(${(index % 5) - 2}deg)`,
            }}
          >
            <span className="absolute inset-0 border-4 border-black rounded-lg translate-x-1.5 translate-y-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></span>
            <span className={`relative border-4 rounded-lg px-3 py-1 bg-white ${word.color}`}>
              {word.text}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
