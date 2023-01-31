export interface Article {
    title: string;
    text: string;
    imgSrc: string;
    source: string;
    payWall?: boolean;
}

export const articles = [{
    source: "New York Times",
    payWall: true,
    imgSrc:  `https://static01.nyt.com/images/2023/01/27/multimedia/27dc-pce-jqwk/27dc-pce-jqwk-jumbo.jpg?quality=75&auto=webp`,
    title: "A Closely Watched Measure of Inflation Slowed in December",
    text: `The Federal Reserve’s preferred inflation index climbed 5 percent in the year through December, a notable slowdown from November and a continuation of a six-month downward trend.

    After stripping out food and fuel, the price index climbed 4.4 percent compared with a year earlier, in line with what economists in a Bloomberg survey had expected and a slowdown from 4.7 percent in November.
    
    The overall picture is one of moderating inflation — providing some long-awaited relief for consumers — but which remains unusually rapid at more than twice the 2 percent rate the Fed aims for on average over time.
    
    Central bankers are raising interest rates to make it more expensive to borrow money to make a major investment or finance a business expansion, hoping to cool demand enough that it drives price increases lower. Policymakers lifted their main policy rate from near-zero to more than 4.25 percent last year, and they are widely expected to raise it another quarter point in their decision on Feb. 1.
    
    The Fed is deciding when to stop its rate increases and how long to leave them high — decisions that it has said will be influenced by incoming data on inflation and the broader economy. That focuses attention on figures like the one released on Friday.
    
    “It will take time for supply and demand to come back into proper alignment and balance, so we must keep moving,” John C. Williams, the president of the Federal Reserve Bank of New York, said last week.
    
    The Fed is also keeping an eye on measures of economic activity, including consumer spending and the labor market. While layoffs at big technology companies have been grabbing headlines in recent weeks, jobless claims remain very low and the unemployment rate is at the lowest level in half a century.
    
    That is expected to change this year. As the Fed’s interest rate increases kick in fully, economists at the central bank and on Wall Street expect the U.S. economy to slow and for unemployment to tick higher. Officials are hoping that they can pull off the slowdown without tipping the economy into an outright recession, but there is no guarantee.`
}, {
    source: "New York Times",
    payWall: true,
    imgSrc: `https://static01.nyt.com/images/2023/01/28/lens/28DC-CHINACHIPS-01/28DC-CHINACHIPS-01-jumbo.jpg?quality=75&auto=webp`,
    title: "Netherlands and Japan Said to Join U.S. in Curbing Chip Technology Sent to China",
    text: `WASHINGTON — The Netherlands and Japan, both makers of some of the world’s most advanced equipment for manufacturing semiconductors, agreed on Friday to join with the United States in barring some shipments of their most high-tech machinery to China, people familiar with the agreement said.

    The agreement, which followed high-level meetings with U.S. national security officials in Washington, will help expand the reach of sweeping restrictions issued unilaterally by the Biden administration in October on the kinds of semiconductor technology that can be shared with China.
    
    The countries did not publicly announce the agreement, because of its sensitivity, and details remain unclear. But the deal seems likely to put technology industries in the countries on a more even footing, preventing companies in Japan and the Netherlands from rushing in to claim market share in China that has been abandoned by U.S. firms. American companies have said that possibility would put them at a disadvantage.
    
    The White House and the Dutch government declined to comment. The Japanese government did not immediately respond to a request for comment.

The United States imposed strict controls in October on the sale to China of both semiconductors and the machines used to make them, arguing that Beijing could use the technology for military purposes, like breaking American codes or guiding hypersonic missiles. But well before those restrictions were issued, the United States had been pressing the Netherlands and Japan to further limit the advanced technology they export to China.

The October rules also clamped down on certain shipments to China from countries outside the United States. Using a novel regulation called the foreign direct product rule, the Biden administration barred companies that use American technology, software or inputs from selling certain advanced semiconductors to China. But these measures applied only to chips, not the machinery used to make them.

Instead, the White House continued to press allies to pass restrictions limiting the sales of semiconductor manufacturing equipment by firms like the Dutch company ASML or Tokyo Electron in Japan. The White House argued that the sale of this advanced machinery to China created the danger that Beijing could one day make its own versions of the advanced products it could no longer buy from the United States.

The negotiations, which are likely to continue, have had to overcome both commercial and logistical concerns. Like the Americans, the Dutch and Japanese were concerned that if they pulled out of the Chinese market, foreign competitors would take their place, said Emily Benson, a senior fellow at the Center for Strategic and International Relations, a Washington think tank. Over time, that “could impact their ability to maintain a technological edge over competitors,” she said.

The Dutch government has already forbidden sales of its most advanced semiconductor machinery, called extreme ultraviolet lithography systems, to China. But the United States has encouraged the Dutch to also limit a slightly less advanced system, called deep ultraviolet lithography. The deal reached Friday includes at least some restrictions on that equipment, according to one person familiar with its terms.`
}, {
    source: "New York Times",
    payWall: true,
    imgSrc: `https://static01.nyt.com/images/2023/01/30/multimedia/30dc-covid-emergency-tmkf/30dc-covid-emergency-tmkf-jumbo.jpg?quality=75&auto=webp`,
    title: "U.S. Plans to End Public Health Emergency for Covid in May",
    text: `WASHINGTON — The Biden administration plans to let the coronavirus public health emergency expire in May, the White House said on Monday, a sign that federal officials believe the pandemic has moved into a new, less dire phase.

    The White House wants to keep the emergency in place for several more months so hospitals, health providers and health officials can prepare for a host of changes that will come when it ends, officials said. Millions of Americans have received free Covid tests, treatments and vaccines during the pandemic, and not all of that will continue to be free once the emergency is declared over.
    
    An average of more than 500 Americans are still dying daily from Covid. But at the three-year mark, the coronavirus is no longer upending everyday life to the extent it once did, partly because much of the population has at least some protection against the virus from vaccinations and prior infections.
    
    Still, the White House said on Monday that the nation needed an orderly transition out of the public health emergency. The administration said it also intended to allow a separate declaration of a national emergency to expire in May.
    
    “An abrupt end to the emergency declarations would create wide-ranging chaos and uncertainty throughout the health care system — for states, for hospitals and doctors’ offices, and, most importantly, for tens of millions of Americans,” the White House said in a statement.
    
    The announcement came just a day before the House is scheduled to vote on a bill that would immediately end the public health emergency. The bill, called the Pandemic Is Over Act, is one of several pandemic-related measures that the Republican-controlled chamber is scheduled to consider this week.
    
    The Biden administration has renewed the public health emergency every 90 days, and it had pledged to alert states 60 days before ending it. It last renewed the public health emergency this month, and the declaration is set to expire in mid-April. The administration now plans to extend it for an additional month before allowing it to lapse in May.
    
    Ending the emergency will trigger complex changes in charges for Covid tests, vaccines and treatments that Americans are accustomed to getting for free. Their costs will vary depending on whether they have private insurance, Medicare coverage, Medicaid coverage or no health insurance. What state they live in could also be a factor.`
}, {
    source: "New York Times",
    payWall: true,
    imgSrc: "https://static01.nyt.com/images/2023/01/30/multimedia/30dc-Prioritization-01-ckhm/30dc-Prioritization-01-ckhm-superJumbo.jpg?quality=75&auto=webp",
    title: "Wall St. Is Counting on a Debt Limit Trick That Could Entail Trouble",
    text: `Washington’s debt limit drama has Wall Street betting that the United States will employ a fallback option to ensure it can make good on payments to its lenders even if Congress doesn’t raise the nation’s borrowing limit before America runs out of cash.

    But that untested idea has significant flaws and has been ruled out by the Biden administration, which could make it less of a bulwark against disaster than many investors and politicians are counting on.
    
    Many on Wall Street believe that the Treasury Department, in order to avoid defaulting on U.S. debt, would “prioritize” payments on its bonds if it could no longer borrow funds to cover all its expenses. They expect that America’s lenders — the bondholders who own U.S. Treasury debt — would be first in line to receive interest and other payments, even if it meant delaying other obligations like government salaries or retirement benefits.
    
    Those assumptions are rooted in history. Records from 2011 and 2013 — the last time the U.S. tipped dangerously close to a debt limit crisis — suggested that officials at the Treasury had laid at least some groundwork to pay investors first, and that policymakers at the Federal Reserve assumed that such an approach was likely. Some Republicans in the House and Senate have painted prioritization as a fallback option that could make failure to raise the borrowing cap less of a disaster, arguing that as long as bondholders get paid, the U.S. will not experience a true default.
    
    But the Biden administration is not doing prioritization planning this time around because officials don’t think it would prevent an economic crisis and are unsure whether such a plan is even feasible. The White House has not asked Treasury to prepare for a scenario in which it pays back investors first, according to multiple officials. Janet L. Yellen, the Treasury secretary, has said such an approach would not avoid a debt “default” in the eyes of markets.
    
    “Treasury systems have all been built to pay all of our bills when they’re due and on time, and not to prioritize one form of spending over another,” Ms. Yellen told reporters this month.
    
    Perhaps more worrisome is that, even if the White House ultimately succumbed to pressure to prioritize payments, experts from both political parties who have studied the temporary fix say it might not be enough to avert a financial catastrophe.
    
    “Prioritization is really default by another name,” said Brian Riedl, formerly chief economist to former Republican Senator Rob Portman and now an economist at the Manhattan Institute. “It’s not defaulting on the government’s debt, but it’s defaulting on its obligations.”
    
    Congress must periodically raise the nation’s debt ceiling to authorize the Treasury to borrow to cover America’s commitments. Raising the limit does not entail any new spending — it is more like paying a credit-card bill for spending the nation has already incurred — and it is often completed without incident. But Republicans have occasionally attempted to attach future spending cuts or other legislative goals to debt limit increases, plunging the United States into partisan brinkmanship.
    
    Today’s debt limit episode could be especially fraught, much like the 2011 episode that tiptoed the nation so close to the brink of default that America’s credit rating was downgraded for the first time. House Republicans have made clear that they want to attach spending stipulations in exchange for raising the borrowing cap, while the White House has said it will not negotiate.

    President Biden and Speaker Kevin McCarthy of California are expected to discuss the debt limit on Wednesday.

    The drama is likely to escalate this summer. The government hit its debt limit on Jan. 19, and the Treasury Department has said it can use temporary measures to keep covering expenses until at least June. After those are exhausted, the debt limit must be raised or suspended in order for the United States to borrow money to pay its bills.

    “The odds of Treasury missing a payment — which is normally unthinkable — are higher than they have been in many years,” said Alec Phillips, an economist at Goldman Sachs. Mr. Phillips thinks a last-minute deal will be struck, but like many of his colleagues at big banks and asset managers, he has been studying what could happen if one is not.

    The Fed, Treasury and industry groups have in the past made contingency plans addressing what they could do if payments on bonds were missed or delayed — including central bank purchases of defaulting bonds.
    “Prioritization is the linchpin of calmness,” said Ralph Axel, an interest rate strategist at Bank of America, explaining that he believes avoiding an outright default could mitigate the fallout of a debt ceiling breach in bond and stock markets. “Markets will come to expect a prioritization plan much more than they did in 2011.”

    Several investors noted that the White House had no reason to acknowledge prioritization planning in public, since doing so could reduce the pressure for lawmakers to negotiate, but they still considered it the most likely outcome.

    “I am not concerned about a bond default,” said Ajay Rajadhyaksha, the global chairman of research at Barclays, who served on a Treasury borrowing advisory committee until 2022. “This has been settled in the past.”

    Many Republicans also take it as a given that prioritization of debt payments would happen, and believe it would help to mute any market reaction.

    “There is a pretty sizable group that thinks as long as we are current on our bond obligations, we’re basically fine,” Michael Strain, director of economic policy studies at the American Enterprise Institute, said of Republicans in the House of Representatives.

    “They do not adequately appreciate the risk of that course of action,” he added. 

    Republicans in the House have been developing legislation — which is unlikely to pass — that would direct Treasury to carry out some payments, including those on the debt, while delaying others. But the Biden administration has firmly ruled out the idea that it would put payments on the government’s debt first. Administration officials say privately that the political optics of choosing to favor bondholders over recipients of government aid would be anathema to Mr. Biden.

    “This so-called prioritization scheme makes Republicans’ priorities pretty clear — crystal clear, if I may add,” Karine Jean-Pierre, the White House press secretary, said on Jan. 17. “They want to put wealthy bondholders over ordinary Americans who want safe food, safe skies, safe communities and secure borders.”

    Attempting to prioritize payments would carry severe political, practical and legal risks. Paying back bondholders might be critical to protecting the bedrock of financial markets, but it would put the administration in the position of looking like it was supporting wealthy investors over retirees, disability beneficiaries and military personnel.

    “The idea that somehow you’re going to prioritize foreign creditors and Wall Street over all the rest of the country? Try making the case for that at my town hall meeting coming up. It’s just wrong,” Senator Ron Wyden, Democrat of Oregon, said on Monday.

    It could also be subject to legal challenges, given that the executive branch would be deciding which congressional spending decisions to ignore and which ones to carry out. That could call into question “the balance of power between Congress and the president over spending priorities and the potential for use of prioritization in ways that Congress might not intend,” according to a Congressional Research Service analysis published in 2015.

    And it might not even work. In 2011, officials had made rough plans for a very straightforward version of prioritization. But the Treasury worried about its ability to prioritize payments within its own systems if it needed to cherry-pick between a range of obligations, rather than just repaying interest and principal on debt while delaying everything else. Fed staff members thought the department could figure it out given time, based on transcripts from that August.

    But “it’s something that until you have developed the procedures and tested the procedures, your comfort level is pretty low,” said Louise Roseman, a former Fed staff member who was working with Treasury on contingency planning. The Fed serves as the government’s banker, so it would have helped carry out the prioritized payments.

    Even after contingency planning in the 2013 showdown, a top Treasury official called prioritization “entirely experimental” and said it carried “unacceptable risk.” 

    It also remains unclear whether prioritization would avert a financial meltdown. Markets may still balk in response to any breach of the debt limit that meant the United States could not make good on its obligations, whether it was an official bond default or not.

    Mr. Phillips at Goldman Sachs pointed out that if the government was holding back payments to state and local authorities or other entities to make good on its debt, for instance, problems could ricochet through other debt markets.  
    Still, many on Wall Street — including Mr. Phillips — think prioritization would be likely if push came to shove because it could avoid some of the worst possible outcomes. 

    Credit default swaps, which provide insurance for bondholders in case borrowers fail to pay them back, would not be triggered. Rating agencies might also look more kindly on America’s situation: S&P, which downgraded U.S. debt in 2011, said it would consider the United States to be in default only if it failed to pay lenders. Moody’s, another rating agency, said it expected a deal to be struck but added that if the government failed to reach an agreement, debt would be prioritized “over all other payments.”

    Still, most doubt that prioritization’s workability will be tested at all. Both Moody’s and S&P have left their assessments of the United States unchanged, expecting a deal to be struck.

    “We are sticking our necks out,” said Joydeep Mukherji, the primary credit rating analyst for the United States at S&P. “If we are wrong, it will be the biggest mistake we have ever made.”
    `}, {
        source: "Washington Post",
        imgSrc: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6WRQEN2YUIDRB6BIJQVML7CLOA.jpg&w=916",
        title: "U.S. military poised to secure new access to key Philippine bases",
        text: `
        The U.S. military is poised to secure expanded access to key bases in the Philippines on the heels of a significant revamp of U.S. force posture in Japan — developments that reflect the allies’ concern with an increasingly fraught security environment in the region and a desire to deepen alliances with the United States, according to U.S. and Philippine officials.
        
        While negotiations are still ongoing, an announcement is expected as soon as this week when Defense Secretary Lloyd Austin meets in Manila with his counterpart and then with President Ferdinand Marcos Jr.

        The expansion involves access to Philippine military bases, likely including two on the northern island of Luzon — which, analysts said, could give U.S. forces a strategic position from which to mount operations in the event of a conflict in Taiwan or the South China Sea. They will also facilitate cooperation on a range of security concerns, including more rapid responses to natural disasters and climate-related events.
        
        Extensive work has been done over the last few months in the Philippines to assess and evaluate various sites, and at least two of them have been pinned down, said a State Department official, who like other officials spoke on the condition of anonymity because they were not authorized to speak about the deliberations.

        A Philippine defense official said an agreement for the additional sites had “more or less” been made but would be formalized when the two defense secretaries meet. Aides from the two offices were continuing to iron out key details in recent days, and at least two of the new sites are in Luzon, he said.

        U.S. national security adviser Jake Sullivan discussed the matter with his counterpart Eduardo Año earlier this month as part of a White House effort to step up cooperation with Indo-Pacific allies, a U.S. official said.

        The increased military cooperation with the United States “bodes well for our defense posture,” said the Philippine official. But, he emphasized, the Philippines’ push to bolster its security “is not aimed at any particular country.”

        Marcos “realizes the dynamics of the region at the moment and that the Philippines really needs to step up,” said the official, adding that the president has been closely monitoring developments in the Taiwan Strait and in the West Philippine Sea. “We’ve already got incursions from multiple countries and the tensions are still expected to rise.”

        While expanded base access is alone not the security linchpin for the region, “it’s a pretty big deal,” said Gregory Poling, director of the Southeast Asia program at the Center for Strategic and International Studies. “This is significant not just in terms of what it means for a Taiwan or South China Sea contingency. This is a signal that the Philippines are all in on modernizing the alliance, and that they understand that a modern alliance means they have responsibilities, too.”

        The Philippines, once a U.S. territory, has been a treaty ally since 1951. It hosted a massive U.S. presence after World War II, including the two of the largest American military facilities overseas — an arrangement that ended in 1991 when the Philippine Senate, asserting the country’s sovereignty was being violated, forced the Americans to relinquish all U.S. bases to the Philippines.

        The mutual defense arrangement was further stressed under the administration of former president Rodrigo Duterte, arguably the most pro-Beijing and anti-American president ever of the Philippines. Duterte threatened to end the Visiting Forces Agreement, which gave legal protections to U.S. military in the Philippines. But after Austin visited in the summer of 2021, and in the face of increasing Chinese aggression in Philippine waters, Duterte withdrew the threat.

        The election of Marcos last year continued a warming trend — President Biden was the first foreign leader to call to congratulate him. But the deepening of the alliance, officials say, is rooted in a recognition that the region is becoming a more dangerous place. In November, for instance, the Chinese Coast Guard forcibly seized Chinese rocket debris being towed by the Philippine Navy near one of the Philippine-held islands. In December, Chinese militia ships were spotted swarming in the West Philippine Sea. And just last week Chinese vessels drove Philippine fishermen away from one of the reefs at which the Philippines has exclusive fishing rights.

        China is the Philippines’ largest trading partner and the Marcos family has historical ties to China: Marcos visited China in 1974 with his father, then-president Ferdinand E. Marcos, and his mother, Imelda Marcos, and met Chairman Mao Zedong. Nonetheless, Marcos has made clear he sees the gathering threat. Asked at the Davos Economic Forum in January whether the South China Sea issue keeps him up at night, he responded, “It keeps you up at night. It keeps you up in the day. It keeps you up most of the time.”

        He also said that “in terms of cross-strait tensions, we are at the very front line,” a reference to the fact that the Philippines’ northernmost islands are only some 200 miles from Taiwan and the likeliest place that refugees would flee in a conflict.

        Marcos said that “whenever these tensions increase,” involving Chinese and American vessels, “we are watching as bystanders” and if something goes wrong, “we are going to suffer.”

        But, he noted, the connection between the United States and the Philippines has “remained strong,” and that the only way to remain strong and relevant “is to evolve.”

        Marcos said, “We have security arrangements with the United States, and that has come to the forefront … because of the increased tensions in our part of the world.”

        Marcos made a trip to Beijing in early January in which, he said, he raised South China Sea concerns. Those include China’s Navy and Coast Guard denying Filipino fishermen access to their traditional fishing grounds as well as the buildup of artificial islands in Philippine waters. Though he came away with more than a dozen agreements involving tourism, trade and e-commerce, his Davos remarks later in the month make clear the security issue prevails.

        “The world has changed,” he said. “Now we are living within the context of all of these other forces that are coming out, especially around the region, around South China Sea.”

        The United States has access to four air force bases and one army base in the Philippines under a 2014 Enhanced Defense Cooperation Agreement. EDCA allows the U.S. military to operate in agreed locations on a rotational basis. None of the five bases are in Luzon’s north.

        In November, Vice President Harris became the highest-ranking U.S. official to visit the Philippine province of Palawan, a thin but roughly 200-mile-long island abutting the contested South China Sea. At the time of her visit, a senior administration official noted that the two allies had identified new locations “to deepen our work together.”

        That work would extend to security cooperation exercises, combined training activities, and allow the United States to more rapidly provide humanitarian relief in natural disasters, the official said. EDCA also provides economic benefits, the official said, noting that the United States has invested more than $82 million in existing bases, with the majority of contracts supporting the projects going to Philippine companies.

        The expected EDCA expansion will follow an announcement earlier this month that the U.S. Marine Corps will be revamping a unit in Okinawa to be better able to fight in austere, remote islands by 2025. Under the plan, a new Marine Littoral Regiment would be equipped with advanced capabilities, such as anti-ship missiles that could be fired at Chinese ships in the event of a Taiwan conflict.

        For over a decade the Pentagon has sought to disperse its presence across the island chains of the Western Pacific to make it harder for China to concentrate its attacks on U.S. bases. But this also helps countries like the Philippines ensure that China does not charge right through their archipelago to attack Taiwan or Japan, said Michael J. Green, chief executive of the United States Studies Center at the University of Sydney.

        “The Philippines are not necessarily signing on to U.S. war plans per se,” said Green, who handled Asia issues at the White House under President George W. Bush. “But it’s a big step forward that will be encouraging to the United States and allies like Japan, and a signal to China of the costs of coercion.”
        `},{
            source: "Washington Post",
            title: "Big Tech was moving cautiously on AI. Then came ChatGPT.",
            imgSrc: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/I2GH75SNKFGPXNRMCMDBGLQ3H4.jpg&w=916",
            text: `
            Three months before ChatGPT debuted in November, Facebook’s parent company Meta released a similar chatbot. But unlike the phenomenon that ChatGPT instantly became, with more than a million users in its first five days, Meta’s Blenderbot was boring, said Meta’s chief artificial intelligence scientist, Yann LeCun.

            “The reason it was boring was because it was made safe,” LeCun said last week at a forum hosted by AI consulting company Collective[i]. He blamed the tepid public response on Meta being “overly careful about content moderation,” like directing the chatbot to change the subject if a user asked about religion. ChatGPT, on the other hand, will converse about the concept of falsehoods in the Quran, write a prayer for a rabbi to deliver to Congress and compare God to a flyswatter.

        ChatGPT is quickly going mainstream now that Microsoft — which recently invested billions of dollars in the company behind the chatbot, OpenAI — is working to incorporate it into its popular office software and selling access to the tool to other businesses. The surge of attention around ChatGPT is prompting pressure inside tech giants including Meta and Google to move faster, potentially sweeping safety concerns aside, according to interviews with six current and former Google and Meta employees, some of whom spoke on the condition of anonymity because they were not authorized to speak.

        At Meta, employees have recently shared internal memos urging the company to speed up its AI approval process to take advantage of the latest technology, according to one of them. Google, which helped pioneer some of the technology underpinning ChatGPT, recently issued a “code red” around launching AI products and proposed a “green lane” to shorten the process of assessing and mitigating potential harms, according to a report in the New York Times.

        ChatGPT, along with text-to-image tools such as DALL-E 2 and Stable Diffusion, is part of a new wave of software called generative AI. They create works of their own by drawing on patterns they’ve identified in vast troves of existing, human-created content. This technology was pioneered at big tech companies like Google that in recent years have grown more secretive, announcing new models or offering demos but keeping the full product under lock and key. Meanwhile, research labs like OpenAI rapidly launched their latest versions, raising questions about how corporate offerings, like Google’s language model LaMDA, stack up.

        Tech giants have been skittish since public debacles like Microsoft’s Tay, which it took down in less than a day in 2016 after trolls prompted the bot to call for a race war, suggest Hitler was right and tweet “Jews did 9/11.” Meta defended Blenderbot and left it up after it made racist comments in August, but pulled down another AI tool, called Galactica, in November after just three days amid criticism over its inaccurate and sometimes biased summaries of scientific research.

        “People feel like OpenAI is newer, fresher, more exciting and has fewer sins to pay for than these incumbent companies, and they can get away with this for now,” said a Google employee who works in AI, referring to the public’s willingness to accept ChatGPT with less scrutiny. Some top talent has jumped ship to nimbler start-ups, like OpenAI and Stable Diffusion.

        Some AI ethicists fear that Big Tech’s rush to market could expose billions of people to potential harms — such as sharing inaccurate information, generating fake photos or giving students the ability to cheat on school tests — before trust and safety experts have been able to study the risks. Others in the field share OpenAI’s philosophy that releasing the tools to the public, often nominally in a “beta” phase after mitigating some predictable risks, is the only way to assess real world harms.

        “The pace of progress in AI is incredibly fast, and we are always keeping an eye on making sure we have efficient review processes, but the priority is to make the right decisions, and release AI models and products that best serve our community,” said Joelle Pineau, managing director of Fundamental AI Research at Meta.

        “We believe that AI is foundational and transformative technology that is incredibly useful for individuals, businesses and communities,” said Lily Lin, a Google spokesperson. “We need to consider the broader societal impacts these innovations can have. We continue to test our AI technology internally to make sure it’s helpful and safe.”

        Microsoft’s chief of communications, Frank Shaw, said his company works with OpenAI to build in extra safety mitigations when it uses AI tools like DALLE-2 in its products. “Microsoft has been working for years to both advance the field of AI and publicly guide how these technologies are created and used on our platforms in responsible and ethical ways,” Shaw said.

        OpenAI declined to comment.

        The technology underlying ChatGPT isn’t necessarily better than what Google and Meta have developed, said Mark Riedl, professor of computing at Georgia Tech and an expert on machine learning. But OpenAI’s practice of releasing its language models for public use has given it a real advantage.

        “For the last two years they’ve been using a crowd of humans to provide feedback to GPT,” said Riedl, such as giving a “thumbs down” for an inappropriate or unsatisfactory answer, a process called “reinforcement learning from human feedback.”

        Silicon Valley’s sudden willingness to consider taking more reputational risk arrives as tech stocks are tumbling. When Google laid off 12,000 employees last week, CEO Sundar Pichai wrote that the company had undertaken a rigorous review to focus on its highest priorities, twice referencing its early investments in AI.

        A decade ago, Google was the undisputed leader in the field. It acquired the cutting edge AI lab DeepMind in 2014 and open-sourced its machine learning software TensorFlow in 2015. By 2016, Pichai pledged to transform Google into an “AI first” company.

        The next year, Google released transformers — a pivotal piece of software architecture that made the current wave of generative AI possible.

        The company kept rolling out state-of-the-art technology that propelled the entire field forward, deploying some AI breakthroughs in understanding language to improve Google search. Inside big tech companies, the system of checks and balances for vetting the ethical implications of cutting-edge AI isn’t as established as privacy or data security. Typically teams of AI researchers and engineers publish papers on their findings, incorporate their technology into the company’s existing infrastructure or develop new products, a process that can sometimes clash with other teams working on responsible AI over pressure to see innovation reach the public sooner.

        Google released its AI principles in 2018, after facing employee protest over Project Maven, a contract to provide computer vision for Pentagon drones, and consumer backlash over a demo for Duplex, an AI system that would call restaurants and make a reservation without disclosing it was a bot. In August last year, Google began giving consumers access to a limited version of LaMDA through its app AI Test Kitchen. It has not yet released it fully to the general public, despite Google’s plans to do so at the end of 2022, according to former Google software engineer Blake Lemoine, who told The Washington Post that he had come to believe LaMDA was sentient.

        But the top AI talent behind these developments grew restless.

        In the past year or so, top AI researchers from Google have left to launch start-ups around large language models, including Character.AI, Cohere, Adept, Inflection.AI and Inworld AI, in addition to search start-ups using similar models to develop a chat interface, such as Neeva, run by former Google executive Sridhar Ramaswamy.

        Character.AI founder Noam Shazeer, who helped invent the transformer and other core machine learning architecture, said the flywheel effect of user data has been invaluable. The first time he applied user feedback to Character.AI, which allows anyone to generate chatbots based on short descriptions of real people or imaginary figures, engagement rose by more than 30 percent.

        Bigger companies like Google and Microsoft are generally focused on using AI to improve their massive existing business models, said Nick Frosst, who worked at Google Brain for three years before co-founding Cohere, a Toronto-based start-up building large language models that can be customized to help businesses. One of his co-founders, Aidan Gomez, also helped invent transformers when he worked at Google.

        “The space moves so quickly, it’s not surprising to me that the people leading are smaller companies,” said Frosst.

        AI has been through several hype cycles over the past decade, but the furor over DALL-E and ChatGPT has reached new heights.

        Soon after OpenAI released ChatGPT, tech influencers on Twitter began to predict that generative AI would spell the demise of Google search. ChatGPT delivered simple answers in an accessible way and didn’t ask users to rifle through blue links. Besides, after a quarter of a century, Google’s search interface had grown bloated with ads and marketers trying to game the system.

        “Thanks to their monopoly position, the folks over at Mountain View have [let] their once-incredible search experience degenerate into a spam-ridden, SEO-fueled hellscape,” technologist Can Duruk wrote in his newsletter Margins, referring to Google’s hometown.

        On the anonymous app Blind, tech workers posted dozens of questions about whether the Silicon Valley giant could compete.

        “If Google doesn’t get their act together and start shipping, they will go down in history as the company who nurtured and trained an entire generation of machine learning researchers and engineers who went on to deploy the technology at other companies,” tweeted David Ha, a renowned research scientist who recently left Google Brain for the open source text-to-image start-up Stable Diffusion.

        AI engineers still inside Google shared his frustration, employees say. For years, employees had sent memos about incorporating chat functions into search, viewing it as an obvious evolution, according to employees. But they also understood that Google had justifiable reasons not to be hasty about switching up its search product, beyond the fact that responding to a query with one answer eliminates valuable real estate for online ads. A chatbot that pointed to one answer directly from Google could increase its liability if the response was found to be harmful or plagiarized.

        Chatbots like OpenAI routinely make factual errors and often switch their answers depending on how a question is asked. Moving from providing a range of answers to queries that link directly to their source material, to using a chatbot to give a single, authoritative answer, would be a big shift that makes many inside Google nervous, said one former Google AI researcher. The company doesn’t want to take on the role or responsibility of providing single answers like that, the person said. Previous updates to search, such as adding Instant Answers, were done slowly and with great caution.

        Inside Google, however, some of the frustration with the AI safety process came from the sense that cutting-edge technology was never released as a product because of fears of bad publicity — if, say, an AI model showed bias.

        Meta employees have also had to deal with the company’s concerns about bad PR, according to a person familiar with the company’s internal deliberations who spoke on the condition of anonymity to discuss internal conversations. Before launching new products or publishing research, Meta employees have to answer questions about the potential risks of publicizing their work, including how it could be misinterpreted, the person said. Some projects are reviewed by public relations staff, as well as internal compliance experts who ensure the company’s products comply with its 2011 Federal Trade Commission agreement on how it handles user data.

        To Timnit Gebru, executive director of the nonprofit Distributed AI Research Institute, the prospect of Google sidelining its responsible AI team doesn’t necessarily signal a shift in power or safety concerns, because those warning of the potential harms were never empowered to begin with. “If we were lucky, we’d get invited to a meeting,” said Gebru, who helped lead Google’s Ethical AI team until she was fired for a paper criticizing large language models.

        From Gebru’s perspective, Google was slow to release its AI tools because the company lacked a strong enough business incentive to risk a hit to its reputation.

        After the release of ChatGPT, however, perhaps Google sees a change to its ability to make money from these models as a consumer product, not just to power search or online ads, Gebru said. “Now they might think it’s a threat to their core business, so maybe they should take a risk.”

        Rumman Chowdhury, who led Twitter’s machine-learning ethics team until Elon Musk disbanded it in November, said she expects companies like Google to increasingly sideline internal critics and ethicists as they scramble to catch up with OpenAI.

        “We thought it was going to be China pushing the U.S., but looks like it’s start-ups,” she said.
    `}, {
        source: "Washington Post",
        title: "Google to stop exempting campaign email from automated spam detection",
        imgSrc: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BGUF5ICS5II6RJWUZIOQGVSCZY.jpg&w=540",
        text: `
        Google plans to discontinue a pilot program that allows political campaigns to evade its email spam filters, the latest round in the technology giant’s tussle with the GOP over online fundraising.
        
        The company will let the program sunset at the end of January instead of prolonging it, Google’s lawyers said in a filing on Monday. The filing, in U.S. District Court for the Eastern District of California, asked the court to dismiss a complaint lodged by the Republican National Committee accusing Google of “throttling its email messages because of the RNC’s political affiliation and views.”`
    },
    {
        source: "The Wall Street Journal",
        title: "Fed Debates Whether Wages or Low Unemployment Will Drive Inflation",
        imgSrc: "https://images.wsj.net/im-711689?width=860&size=1.5005861664712778",
        text: `
        Stubbornly high inflation is finally easing as supply chain disruptions fade and interest rates at 15-year highs put the brakes on demand. Now, Federal Reserve officials have voiced unease that prices could reaccelerate because labor markets are so tight.

        At issue is what’s the right way to forecast inflation: a bottom-up analysis of recent readings on prices and wages that puts more weight on pandemic-driven idiosyncrasies—or a traditional top-down analysis of how far the economy is operating above or below its normal capacity. 
        
        Some inside the Fed, including its influential staff, put more weight on the latter, which would argue for tighter policy for longer. Others prefer the former, which could argue for a milder approach.

        The Fed is likely to raise interest rates on Wednesday by a quarter percentage point to a range between 4.5% and 4.75%, slowing increases for the second consecutive meeting. That would give officials more time to study the effects of earlier rate rises. They are likely to debate how long to continue raising rates and how long to hold them at that higher level.

    The workhorse models that Fed and private-sector economists use to predict inflation compare the country’s total demand for goods and services with their total supply as represented by the “output gap”—the difference between actual gross domestic product and potential GDP based on available capital and labor. They also lean on the Phillips curve, which predicts that wages and prices rise faster when unemployment falls below some natural, sustainable level. 

    Estimating these variables is difficult even in normal times, let alone after a pandemic and amid the war in Ukraine. The natural unemployment rate can only be inferred from the behavior of prices and wages. A decade ago, Fed officials put it between 5% and 6% and then revised it lower to around 4% as actual unemployment fell below 4% without much acceleration in wages.

    Their projections for interest rates and inflation in December suggest they think the natural rate has temporarily shifted up to around 4.8%, said Aneta Markowska, chief economist at Jefferies LLC. With unemployment now at 3.5%, that suggests the labor market is too tight and likely to keep wage pressure high.

    Minutes of last month’s Fed meeting show the central bank’s staff economists think the natural rate might decline slowly because job-matching will remain inefficient, suggesting price pressures could persist for longer than previously thought. 

    The staff also revised down estimates of potential output because of tepid labor force growth, leaving actual output even further above its sustainable level. Staff saw this output gap persisting until the end of 2024, a year longer than they projected just a few weeks earlier.  

    “It was a significant move,” said Riccardo Trezzi, a former Fed economist who runs an economic-consulting firm in Geneva. “The staff is telling the committee, ‘You cannot give up now because if you do, we will remain significantly above 2% inflation in the medium term.’”

    Still, Fed officials are wary of pinning too much on output gaps and Phillips curves. Since an overheated labor market is likely to show up first in wages, many officials see those as a better proxy of underlying inflation pressure. Wages reveal what employers think they can recover via prices or productivity and what workers expect given their own cost of living. 

    If wages continue to grow at their recent rate of 5% to 5.5% that would keep inflation well above the Fed’s 2% inflation goal, assuming productivity grows around 1% to 1.5% a year. 

    This is why Fed policy makers last month revised higher their projections for inflation this year. Higher wage growth boosts aggregate incomes, providing spending power that can sustain higher prices. Officials worry tight labor markets could allow paychecks to rise in lockstep with prices, as occurred during the 1970s. 

    Since last month’s meeting, there has been more evidence that labor demand may have softened, including declines in temporary hiring and hours worked. If wage growth slipped to 4%, getting inflation to 2% would be easier. 

    A boost in the supply of workers would help allay wage worries. Jonathan Pingle, chief U.S. economist at UBS, believes labor shortages could ease as immigration rebounds. Last month, the Census Bureau published estimates showing net immigration for the 12 months through June topped 1 million for the first time since 2017.

    Fed officials closely watch the employment-cost index because it is the most comprehensive measure of wage growth. The fourth-quarter figure is to be released Tuesday.  

    Inflation as measured by the 12-month change in the price index of personal-consumption expenditures excluding food and energy fell to 4.4% last month from 5.2% in September. Though still above the Fed’s 2% goal, it moderated in the last three months to an annualized 2.9%. 

    Inflation is slowing because prices of goods are falling. Large increases in housing costs have slowed but haven’t filtered through to official price gauges yet. As a result, Fed Chair Jerome Powell and several colleagues shifted attention recently toward a narrower subset of labor-intensive services by excluding prices for food, energy, shelter and goods.

    Mr. Powell has said prices in this category, which rose 4% in December from a year earlier, offer the best gauge of higher wage costs passing through to consumer prices.

    In a speech this month, Fed Vice Chair Lael Brainard offered a more optimistic reassessment of that view, highlighting reasons the links between wages and prices for non-housing service prices might be weaker.

    She pointed to the prospect for price increases to moderate if they reflect the ripple effects of recent global dislocations that are now reversing—as opposed to the growth in wages. Prices of restaurant meals, car insurance and airfares, for example, could ease if they have been primarily caused by the pass-through of higher food prices, car prices, and fuel prices, respectively. 

    “If wage pressures are moderating on their own, it becomes harder to tell a story where you’re going to be really worried about a wage-price spiral developing,” said Mr. Pingle of UBS. 

    John Roberts, a former Fed economist, said he sees some scope for declining non-wage costs to ease pressure on services inflation. “But in the medium term, I have to lean on Powell’s argument here,” he said. “If wage growth stays as high as it has been, they will still have an inflation problem.”
        `
    }, {
        source: "The Wall Street Journal",
        title: "Memory-Chip Makers Face a Prolonged Price Slump",
        imgSrc: "https://images.wsj.net/im-710792?width=287&height=191",
        text: `
        SEOUL—Memory-chip prices, which dropped steeply over the past year, are expected to keep falling in the first half of 2023, putting more pressure on an industry that has already cut investments and jobs.

        Average prices for the two main types of memory chips used in everyday electronics—from smartphones to personal computers and TV sets—are projected to experience double-digit percentage declines this quarter, industry analysts say. That comes after prices dropped by more than 20% in the last three months of 2022 from the previous quarter, according to analyst data. 

        Memory-chip makers, many saddled with large inventories, have also issued grim outlooks as the slump in demand for gadgets persists after a pandemic boom.

Micron Technology Inc., MU -3.38%decrease; red down pointing triangle SK Hynix Inc., Western Digital Corp. WDC -1.62%decrease; red down pointing triangle and Tokyo-based Kioxia Holdings Corp. have unveiled plans to reduce their investments aimed at capacity expansion or to lower output to address a supply glut that is getting worse. Last month, Micron Technology said it would cut jobs and spending for the year to reduce costs after reporting a loss in its most recent quarter.

Memory chips are considered a bellwether for the semiconductor industry because they are largely commoditized and sensitive to shifts in supply and demand.

Samsung Electronics, the world’s largest producer of memory chips, reported Tuesday that its operating profit for the October-to-December quarter dropped 69% from a year earlier.

SK Hynix, which reports earnings Wednesday, is expected to report a fourth-quarter loss of around 812 billion won, or about $661 million, according to analyst projections averaged by FactSet.

Companies making other types of semiconductors are also caught up in the downturn. On Thursday, Intel Corp. reported a fourth-quarter loss and said poor market conditions would persist through the first half of the year.

Memory prices peaked during the early Covid-19 pandemic due to strong demand for tech products, and they began falling in late 2021. Quarter-on-quarter declines got steeper through the second half of last year, as macroeconomic woes and rising interest rates collided with geopolitical uncertainties due to the Russia-Ukraine war and China’s Covid lockdowns.

The memory-chip industry started 2023 with high inventories, said Kim Soo-kyoum, associate vice president covering memory semiconductors at International Data, a tech-market-research firm. With demand still sluggish, memory prices are expected to keep declining throughout this year, though the quarterly drops could narrow or flatten in the second half depending on how soon buyers come back, Mr. Kim said. 

Average contract prices for the two main types of memory chips, DRAM and NAND flash, dropped by roughly 23% and 28%, respectively, during the October-to-December period from the prior quarter, according to TrendForce, a Taiwan-based market researcher that tracks memory prices. 

DRAM memory enables devices to multitask, while NAND flash memory provides storage capacity on devices. 

Prices for both will likely keep falling through the first half of this year, TrendForce said. DRAM prices are expected to drop—on a quarterly basis—by 20% in the first quarter and 11% in the second quarter, while NAND flash prices during the same time frame are projected to drop by about 10% and 3%, respectively.  

Inflation, high interest rates and weak economies are expected to continue to drive pullbacks in corporate and consumer spending on products including smartphones, PCs and data servers that are the biggest users of memory chips, TrendForce said. 

DRAM prices are expected to continue dropping through the second half of this year and production cuts on a massive scale would be needed to shore them up, said Avril Wu, a TrendForce senior vice president.

Prices of NAND flash, however, could start to rebound starting in the second half as steeper price falls in recent months had prompted vendors to pursue more aggressive supply cutbacks for 2023, Ms. Wu said.

Samsung, the biggest producer of both types of memory chips, hasn’t publicly committed to moves that could reduce supply. In its last earnings call in October, Samsung’s memory-business Executive Vice President Han Jin-man said the firm was “not considering any artificial reduction in production for the sake of short-term, supply-demand rebalance.” 

A Samsung spokeswoman said the company’s stance hasn’t changed.

In a report last month, Goldman Sachs forecast Samsung’s semiconductor unit’s operating profit for the October-to-December quarter would be around 1.5 trillion won, or roughly $1.2 billion, an 83% drop from a year earlier. It also projected Samsung’s memory business would record an operating loss starting from the first quarter of this year due to steep losses in the NAND flash business. 

Global tech demand could recover later this year, aided by factors like China’s reopening after a period of strict Covid-19 restrictions, which could revive consumer spending on products like smartphones, said David Tsui, senior credit analyst at S&P Global Ratings.

For now, it isn’t clear how quickly and to what extent consumer behavior would change in the country, he said. 

`
    }, {
        source: "The Wall Street Journal",
        imgSrc: "https://images.wsj.net/im-712773?width=367&height=245",
        title: "The U.S. Consumer Is Starting to Freak Out",
        text: `
        The engine of the U.S. economy—consumer spending—is starting to sputter.

        Retail purchases have fallen in three of the past four months. Spending on services, including rent, haircuts and the bulk of bills, was flat in December, after adjusting for inflation, the worst monthly reading in nearly a year. Sales of existing homes in the U.S. fell last year to their lowest level since 2014 as mortgage rates rose. The auto industry posted its worst sales year in more than a decade.
        
        It’s a stark turnaround from the second half of 2020, when Americans lifted the economy out of a pandemic downturn, helping the U.S. avoid what many economists worried would be a prolonged slump. Consumers snapped up exercise bikes, televisions and laptop computers for schoolchildren during lockdowns. When restrictions were lifted, they rushed back to their favorite restaurants and travel destinations.
        
        And they kept spending, helped by government stimulus, flush savings accounts and cheap credit, even as inflation picked up. Faced with four-decade-high inflation last year, Americans outspent it. Through most of 2022, consumer spending growth exceeded price increases by about 2 percentage points.

        Now the forces that helped keep spending high are unwinding, while inflation remains elevated. The share of monthly income Americans set aside for savings was 3.4% in December, down from 7.5% a year earlier and from a record high in April 2020. Credit-card interest rates have been rising, and Federal Reserve officials have signaled that they plan an additional quarter-percentage point increase to the central bank’s benchmark rate this week. That would bring the rate to between 4.5% and 4.75%, from near zero at the start of last year.

        Annual inflation, as measured by the consumer-price index, remained above 5% in December for the 19th straight month, the longest such streak since the early 1980s.

Consumer spending accounts for roughly 70% of the economy. A downshifting consumer is a key reason that business and academic economists polled by The Wall Street Journal, on average, put the probability of a recession in the next 12 months at 61%. However, many economists say, the U.S. might avoid a recession entirely if spending patterns stabilize.

One factor making forecasting more difficult: While unemployment is trending at a half-century low, big companies including Amazon.com Inc., Goldman Sachs Group Inc., and Microsoft Corp. have begun to cut jobs.

“The last bastion of strength is the labor market, but I don’t think it can withstand all these other forces,” said Nationwide Chief Economist Kathy Bostjancic.

Recent layoff trends worry Benjamin DeLong, a 32-year-old customer-account manager at an industrial manufacturer in southern Minnesota. His savings rose to $3,700 during the pandemic, thanks in part to government stimulus. He is now down to about 3 cents.

Mr. DeLong said he had to dip into his savings to cover the rising costs of his groceries, utilities and car insurance. He has found some relief in his grocery bills since he and his partner decided last year to purchase some pigs, jointly with other families, to be raised on a relative’s farm. Their portion of meat yielded nearly 150 pounds, saving them about $500 on groceries, Mr. DeLong estimated.

The possibility of layoffs, he said, is “part of the crunch that I’m having to consider now. What’s going to happen if I no longer have an income?”

So far, jobs have remained plentiful and wages continued to rise in the face of Federal Reserve tightening. Unemployment was a low 3.5% in December. Hourly wages were up a robust 4.6% year-over-year. There were about 10.5 million unfilled jobs available in November, according to the Labor Department, a sign that demand for labor remained strong.

“Households had a ton of comfort they don’t normally have about their job prospects,” said Marianne Wanamaker, an economist at the University of Tennessee. “They knew they could get a job tomorrow if they wanted to, and that remains mostly true.”

Still, there are signs of labor-market weakness. Employers are shedding temporary workers at a fast rate, and people who lose their jobs are taking longer to find new ones. Meanwhile, the number of hours worked a week has declined for two straight months, according to the Labor Department, resulting in a slowdown in workers’ take-home pay.

Mikhail Andersson, owner of First Class Tattoo in New York City, has seen signs of weakening demand. After it was cleared to reopen from lockdowns in the summer of 2020, his business was slammed by customers flush with unemployment insurance payments and stimulus checks.

In mid-November of last year, Mr. Andersson started getting calls from clients who had booked daylong tattoo sessions, saying they could only afford shorter ones or pulling out altogether. Mr. Andersson, who specializes in tattoo projects that often take five or six all-day sessions to complete, had 15 cancellations for full-day slots in December.

“In my 15 years doing this, I’ve never seen that—people calling up and saying they don’t have the money to spend right now or can only afford an hour because their current situation is pretty bad,” he said.

For now, First Class Tattoo isn’t likely to slash prices because the baseline level of demand remains strong. Some 250 clients are still on the wait list.

Also weighing on many consumers: The rapid increase in rates in the past year, tied to Fed tightening, has pushed the cost of all types of debt higher.

Mortgage rates reached a 20-year high last fall. Some 57% of consumers were concerned about making housing payments in the fourth quarter, according to a survey by Freddie Mac, up from 48% in the third quarter.

The increases are gradually starting to slow down consumer spending, though it might take a while before the effect is fully realized.

“We’re probably going to have higher interest rates around for quite a while. You would think eventually that would dampen consumption, although that we haven’t had the full effect yet,” said Harvard University economist Kenneth Rogoff.

Credit-card balances were up 15% on the year in the third quarter, according to the Federal Reserve Bank of New York, the largest increase in more than two decades.

Additionally, tens of millions of Americans are set to start or resume making payments on student loans later this year, after the Supreme Court rules on President Biden’s student-debt cancellation plan. Payments have been frozen since March 2020, and are scheduled to begin again 60 days after litigation is resolved or the program is implemented.

Many taxpayers will get smaller refunds when they file their returns in the coming months because Congress didn’t extend the breaks put in place at the height of the pandemic.

Most Americans who lose their jobs can expect unemployment payments for six months or less, at a fraction of their former paychecks, the same as before pandemic programs kicked in. Pandemic programs allowed Americans to receive unemployment payments for as long as 18 months, and in some cases paid workers more than their paychecks.

The previously generous jobless benefits and direct federal payments to households caused the share of income Americans save every month to hit new highs in 2020. Since then, the saving rate has fallen to roughly 3% of monthly income, from more than 30% at the start of lockdowns. In 2019, the year before the pandemic, the rate was 8.8%.

The large stock-market declines over the past year also alarmed consumers, including Scottsdale, Ariz.-based Sara Laor, who is 57 years old. Ms. Laor said the declines depleted the holdings in her 401(k) and IRA accounts by nearly 40%.

Over the past year, her family has had to dip into their savings to pay for essential car and plumbing repairs. They are putting off other expenses, like buying a new car, and have given up ordering in meals.

She’s trying to spend more cautiously, shunning recipes involving pricey eggs and buying more canned food.

“Everything I do just feels like I’m a lot poorer: Can I do this or can I do that?” she said.

U.S. factories, shippers and importers are pulling back, a sign they anticipate less demand from Americans in the months ahead.

Inbound volumes at the ports of Los Angeles and Long Beach in California were down 20.1% in December from a year earlier, and have been behind 2019 levels since August. A little over a year ago, backlogs at ports were drawing President Biden’s attention.

Nicholas Hobbs, chief operating officer of J.B. Hunt Transport Services Inc., which manages truck and rail shipments, said the company has seen demand fall off for big and bulky products, including appliances, furniture and exercise equipment—although off-price retailers with discounted inventory are shipping more.

Jazzlyn Millberry, 33, has been looking for big ways to make cuts. One day last fall, her banking app informed her that the cost of one month’s groceries and household goods for her family of four had risen to $900, from about $600 or $700.

“I find myself now going to three or four different grocery stores just to get the best deals on things to save on costs,” said Ms. Millberry, a health-insurance claims analyst in Pickerington, Ohio.

On one recent outing, she stopped at Kroger for eggs and meat, Aldi for produce, Sam’s Club for her children’s snacks, and Target for toilet paper.

Even as she has cut back on groceries, restaurants, hairstyling and facials, her credit-card balances have grown in the past several months. She said she started making only the minimum required payment on her credit cards.

        `  
    }
]