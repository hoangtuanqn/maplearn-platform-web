import React from "react";
import ProfileSidebar from "./ProfileSidebar";

interface ProfileContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

const ProfileContentLayout: React.FC<ProfileContentLayoutProps> = ({ title, children }) => {
    return (
        <div className="flex h-full w-full gap-6">
            <ProfileSidebar />

            <div className="w-full grow xl:w-[70%]">
                <div className="min-h-full rounded-xl bg-white px-8 py-6 shadow-sm">
                    <h3 className="block-heading mb-6">{title}</h3>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProfileContentLayout;
