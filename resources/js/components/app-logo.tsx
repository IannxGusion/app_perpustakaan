import AppLogoIcon from './app-logo-icon';
export default function AppLogo() {
    return (
        <>
            <div>
                <AppLogoIcon className="size-15" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Project Library VI</span>
            </div>
        </>
    );
}
