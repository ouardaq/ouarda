import Terminal from '@/components/Terminal';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  // Find the Languages category
  const languagesCategory = skillCategories.find(cat => cat.category === "Languages");
  // Filter out the Languages category from the rest
  const otherCategories = skillCategories.filter(cat => cat.category !== "Languages");

  return (
    <section className="mb-16">
      <Terminal text="skills" className="section-title" />
      
      {/* Languages Section - Full Width Feature */}
      {languagesCategory && (
        <div className="card w-full mb-6">
          <h3 className="text-lg font-bold mb-4 text-center text-[var(--accent)]">
            {languagesCategory.category}
          </h3>
          {/* Added gap-1 for better mobile spacing if items wrap tightly */}
          <div className="flex flex-wrap justify-center gap-1">
            {languagesCategory.skills.map((skill, i) => (
              <span key={i} className="badge hover:border-[var(--accent)] transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Other categories (grid layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherCategories.map((category, index) => (
          // Added h-full so cards stretch to equal heights in the grid rows
          <div key={index} className="card h-full flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-[var(--accent)]">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill, i) => (
                <span key={i} className="badge hover:border-[var(--accent)] transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}