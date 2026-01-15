import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import madhavdasjiImg from "@/assets/legacy/guru-madhavdasji-CxxscoBG.webp";
import yogendraImg from "@/assets/legacy/guru-yogendra-ji-Zg-claZv.webp";
import sitadeviImg from "@/assets/legacy/guru-sitadevi-RiQTaopE.webp";
import jayadevaImg from "@/assets/legacy/guru-jayadeva-BWjCt8nx.webp";
import hansajiImg from "@/assets/legacy/guru-hansaji-S8qB5lIZ.webp";
import hrishiImg from "@/assets/legacy/guru-hrishi-zAkudU3P.webp";

// Guru Data Type
interface Guru {
    id: number;
    name: string;
    title: string;
    years: string;
    image: string;
    shortBio: string;
    fullBio: string[];
}

const GURU_DATA: Guru[] = [
    {
        id: 1,
        name: "Paramhamsa Madhavdasji",
        title: "Founder's Guru",
        years: "1798-1921",
        image: madhavdasjiImg,
        shortBio: "The spiritual master who guided Shri Yogendra Ji on the path of Yoga.",
        fullBio: [
            "Paramhamsa Madhavdasji was a renowned master of Yoga who revived the ancient science offering it to the modern world.",
            "He was a figure of great spiritual authority and the guru of Shri Yogendra Ji. His teachings formed the bedrock upon which The Yoga Institute was built."
        ]
    },
    {
        id: 2,
        name: "Shri Yogendra ji",
        title: "Founder",
        years: "1897 - 1989",
        image: yogendraImg,
        shortBio: "Shri Yogendra Ji laid down the foundation of The Yoga Institute, the oldest organized yoga center in the world, in 1918. He is the architect of the evolution of Yoga that has happened in the world in the last 100 years.",
        fullBio: [
            "Shri Yogendra Ji laid down the foundation of The Yoga Institute, the oldest organized yoga center in the world, in 1918. He is the architect of the evolution of Yoga that has happened in the world in the last 100 years. Furthermore, the western world was introduced to Yoga, for the first time ever, when Yogendra Ji set up the first yoga center in New York, America in 1920.",
            "Yogendra Ji's work drew the attention of researchers and scientists from all over the world. Experts and scholars from various universities began visiting the institute for further studies. He took a scientific approach to the study of yoga, which was never done before. Yogendra ji firmly believed that people must be educated about Yoga before they start practicing it. It was his scientific temperament that brought in top experts, like American virologist Mr. Jonas Salk."
        ]
    },
    {
        id: 3,
        name: "Smt. Sitadevi Yogendra",
        title: "Mother",
        years: "1912 - 2008",
        image: sitadeviImg,
        shortBio: "Known as the Mother of the Institute, she was instrumental in making Yoga accessible to women.",
        fullBio: [
            "Smt. Sitadevi Yogendra joined the institute and worked tirelessly to support the mission of Shri Yogendra Ji.",
            "She pioneered yoga for women and children, breaking social barriers and making the practice inclusive for all sectors of society. Her nurturing presence earned her the title of 'Mother' of the institute."
        ]
    },
    {
        id: 4,
        name: "Dr. Jayadeva Yogendra",
        title: "President",
        years: "1929 - 2018",
        image: jayadevaImg,
        shortBio: "Completed his Masters in Samkhya and Yoga in 1952. A true Yogi who showed the world how to live a balanced and perfect Yogic life.",
        fullBio: [
            "Dr. Jayadeva Yogendra, fondly known as Dr. Sahab, was a true Yogi who showed the world how to live a balanced and perfect Yogic life. He served as the President of The Yoga Institute and continued his father's legacy with aplomb until he took samadhi in 2018.",
            "Dr. Jayadeva completed his Masters in Samkhya and Yoga in 1952 from Mumbai University. He was awarded the Hargobindas Scholarship for a Ph.D. (Dr. of Philosophy), in 1955, for his thesis on 'Moksha Parvan'. He was a guru, a guide, and an ideal to millions who came to him.",
            "Dr. Sahab is the architect of the Institute's signature courses and curriculum. He integrated attitude-based concepts into yoga training and life activities which was the greatest contribution to the school of yoga. He also served as the Editor of the Institute's monthly Journal, 'Yoga & Total Health.'",
            "Dr. Jayadeva founded the International Board of Yoga in 1975 to counter misinformation. He decoded the classical systems of yoga to present them in a way which would make them easily acceptable and adoptable."
        ]
    },
    {
        id: 5,
        name: "Smt. Hansaji J Yogendra",
        title: "Director",
        years: "1947",
        image: hansajiImg,
        shortBio: "Current Director of The Yoga Institute, a charismatic leader and global wellness icon.",
        fullBio: [
            "Smt. Hansaji J Yogendra is the dynamic Director of The Yoga Institute. She is a global symbol of wellness and balanced living.",
            "Under her leadership, the Institute has expanded its reach globally, touching millions of lives through digital platforms and international centers. She is known for her simple, practical, and effective approach to yoga."
        ]
    },
    {
        id: 6,
        name: "Shri Hrishi J Yogendra",
        title: "Assistant Director",
        years: "1988",
        image: hrishiImg,
        shortBio: "Represents the modern face of the lineage, bringing innovation while preserving tradition.",
        fullBio: [
            "Shri Hrishi J Yogendra is the Assistant Director, carrying forward the rich legacy into the future.",
            "He focuses on modernizing the institute's operations and connecting with the youth, ensuring that the ancient wisdom of yoga remains relevant for the next generation."
        ]
    }
];

const Legacy = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedGuruId, setSelectedGuruId] = useState<number>(2); // Default to Shri Yogendra Ji

    const selectedGuru = GURU_DATA.find(g => g.id === selectedGuruId) || GURU_DATA[1];

    const handleKnowLegacyClick = () => {
        setIsExpanded(true);
        // Scroll to top of section logic simply handled by state change for now
    };

    return (
        <section className={`py-16 md:py-24 overflow-hidden transition-all duration-700 ${isExpanded ? 'bg-sage-dark/5' : 'bg-background'}`}>
            <div className="zen-container">

                {/* Header (Always Visible, adapts based on state) */}
                {!isExpanded && (
                    <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
                        <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-3">Our Heritage</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground">
                            World's Oldest <span className="text-primary italic">Yoga Institute</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-6 rounded-full" />
                        <p className="max-w-4xl mx-auto mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                            The Yoga Institute, world's first yoga center, was established in 1918 by the legendary yogi Shri Yogendra Ji also known as the
                            father of the modern yoga Renaissance. Our life-changing courses have transformed millions of lives and created more than
                            100,000+ teachers worldwide.
                        </p>
                    </div>
                )}

                {/* Content Area */}
                <div className="relative">

                    {/* EXPANDED VIEW: Featured Guru Details */}
                    {isExpanded && (
                        <div className="mb-12 md:mb-20 animate-fade-in duration-700">
                            <div className="bg-white/80 backdrop-blur-sm border border-sage-200 rounded-[2rem] p-6 md:p-12 relative overflow-hidden shadow-soft">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                                    <div className="md:col-span-12 lg:col-span-3">
                                        <div className="aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl bg-white relative group">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                            <img
                                                src={selectedGuru.image}
                                                alt={selectedGuru.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-12 lg:col-span-9 space-y-6 md:pl-8">
                                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                            <div>
                                                <h3 className="text-3xl md:text-5xl font-serif font-medium text-foreground">{selectedGuru.name}</h3>
                                                <p className="text-primary text-lg font-medium mt-2 flex items-center gap-2">
                                                    {selectedGuru.title}
                                                    <span className="text-muted-foreground/40 hidden md:inline">|</span>
                                                    <span className="text-muted-foreground text-base font-normal bg-sage-50 px-3 py-0.5 rounded-full">{selectedGuru.years}</span>
                                                </p>
                                            </div>
                                            <div className="hidden lg:block">
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-xs font-semibold tracking-wider uppercase">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-sage-600 animate-pulse"></span>
                                                    Legacy
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                                            {selectedGuru.shortBio}
                                        </p>

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="lg" className="mt-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md">
                                                    Read Full Biography <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-5xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-hidden p-0 gap-0 border-0 bg-[#FFFBF5] shadow-2xl rounded-xl sm:rounded-2xl">
                                                <div className="grid md:grid-cols-12 h-full overflow-y-auto md:overflow-hidden">
                                                    {/* Sidebar Image */}
                                                    <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-br from-sage-100 to-amber-50 p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[300px]">
                                                        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 relative z-10 shrink-0">
                                                            <img src={selectedGuru.image} alt={selectedGuru.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <h3 className="text-2xl font-serif font-bold text-foreground relative z-10">{selectedGuru.name}</h3>
                                                        <p className="text-primary font-medium mt-2 relative z-10">{selectedGuru.title}</p>
                                                        <p className="text-muted-foreground text-sm mt-1 relative z-10">{selectedGuru.years}</p>

                                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/60 to-transparent" />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="md:col-span-8 lg:col-span-8 p-6 md:p-10 lg:p-12 bg-[#FFFBF5] overflow-y-auto">
                                                        <div className="flex justify-between items-center mb-6">
                                                            <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Biography</h4>
                                                            <img src="/logo-placeholder.png" className="h-8 opacity-20" alt="" />
                                                        </div>
                                                        <div className="prose prose-lg prose-stone max-w-none">
                                                            {selectedGuru.fullBio.map((paragraph, index) => (
                                                                <p key={index} className="text-foreground/80 leading-relaxed mb-6 font-light">
                                                                    {paragraph}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* GRID OF PORTRAITS (Thumbnails) */}
                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 ${isExpanded ? 'opacity-100 scale-100 translate-y-0' : ''} transition-all duration-700 ease-out`}>
                        {GURU_DATA.map((guru, idx) => (
                            <div
                                key={guru.id}
                                onClick={() => {
                                    setIsExpanded(true);
                                    setSelectedGuruId(guru.id);
                                }}
                                className={`
                                    cursor-pointer group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-500
                                    ${isExpanded && selectedGuruId === guru.id ? 'ring-4 ring-primary ring-offset-4 scale-105 z-10 shadow-xl' : 'hover:-translate-y-2'}
                                    animate-fade-in-up
                                `}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <img
                                    src={guru.image}
                                    alt={guru.name}
                                    className={`w-full h-full object-cover transition-all duration-700 ${isExpanded && selectedGuruId === guru.id ? 'grayscale-0 scale-110' : 'grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110'}`}
                                />
                                <div className={`
                                    absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
                                    flex flex-col justify-end p-4 text-white transition-all duration-300
                                    ${isExpanded && selectedGuruId === guru.id ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-2 group-hover:translate-y-0'}
                                `}>
                                    <h4 className="font-serif text-sm md:text-base font-medium leading-tight mb-0.5">{guru.name}</h4>
                                    <p className="text-[10px] md:text-xs text-white/80 font-medium tracking-wide">{guru.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Trigger for Default View */}
                    {!isExpanded && (
                        <div className="text-center mt-16 animate-fade-in-up animation-delay-300">
                            <Button
                                onClick={handleKnowLegacyClick}
                                variant="outline"
                                size="xl"
                                className="bg-white hover:bg-sage-50 text-foreground border-border hover:border-primary transition-all duration-300 rounded-full px-8 h-14 text-lg font-serif"
                            >
                                Explore Our Legacy <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Legacy;
