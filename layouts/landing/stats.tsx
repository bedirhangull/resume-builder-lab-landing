import { Button } from "@/components/ui/button";

export default function Stats() {
    return (
        <section className="py-4 md:py-12 lg:py-16">
        <div className="container flex flex-col items-start text-left">
          <div className="mb-12 w-full md:mb-16">
            <h2 className="mb-8 w-full max-w-[24rem] text-pretty text-3xl font-bold sm:text-4xl md:max-w-[30rem] lg:max-w-[37rem] lg:text-5xl">
              See the Impact of Our Resume Builder
            </h2>
            <div className="flex flex-col justify-start gap-2 sm:flex-row">
              <Button size='lg' >
                Create My Resume 
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-12 sm:w-fit sm:grid-cols-4 lg:gap-16">
            {/* Stat 1 */}
            <div className="w-full">
              <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">95%</div>
              <div className="text-base leading-6 text-muted-foreground lg:text-lg">
                Customer Satisfaction
              </div>
            </div>
            {/* Stat 2 */}
            <div className="w-full">
              <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">200+</div>
              <div className="text-base leading-6 text-muted-foreground lg:text-lg">
                Companies Hiring Our Users
              </div>
            </div>
            {/* Stat 3 */}
            <div className="w-full">
              <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">40%</div>
              <div className="text-base leading-6 text-muted-foreground lg:text-lg">
                More Interview Calls
              </div>
            </div>
            {/* Stat 4 */}
            <div className="w-full">
              <div className="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">25k+</div>
              <div className="text-base leading-6 text-muted-foreground lg:text-lg">
                Resumes Created
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }