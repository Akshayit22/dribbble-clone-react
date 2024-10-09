import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="text-black flex flex-col justify-center items-center">
                    <p className="text-3xl hover:opacity-55 hover:cursor-pointer">Whoops, Something went wrong.</p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
