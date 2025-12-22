'use client'
//Components
import MainSectionFiveItem from "./MainSectionFiveItem";

export default function MainSectionFive () {


    return (
        <div className="flex flex-col items-center gap-3 mb-5">
            <h3 className="text-center font-bold text-[75px] text-[#313131]">FAQ&apos;s</h3>
            <div className="w-full flex flex-col gap-5 max-w-[600px]">
                <MainSectionFiveItem
                    head={'Chamber reached do he nothing be?'}
                    par={'Our asked sex point her she seems. New plenty she horses parish design you. Stuf sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.'}
                />
                <MainSectionFiveItem
                    head={'Stuff sight equal of my woody?'}
                    par={'Our asked sex point her she seems. New plenty she horses parish design you. Stuf sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.'}
                />
                <MainSectionFiveItem
                    head={'At be pleasure of children be?'}
                    par={'Our asked sex point her she seems. New plenty she horses parish design you. Stuf sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.'}
                />
                <MainSectionFiveItem
                    head={'Amounted repeated as belived in confined?'}
                    par={'Our asked sex point her she seems. New plenty she horses parish design you. Stuf sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.'}
                />
                <MainSectionFiveItem
                    head={'In am do giving to afford parish settle easily garret?'}
                    par={'Our asked sex point her she seems. New plenty she horses parish design you. Stuf sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.'}
                />
            </div>
        </div>
    );
}