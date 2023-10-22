import { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Button } from "@/Components/ui/button";
import "../../css/Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/Context/AuthContent";

export function TabsDemo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // auth context
    const { dispatch } = useContext(AuthContext);

    function handleLogin() {
        const authInstance = getAuth();
        signInWithEmailAndPassword(authInstance, email, password)
            .then((userCredential) => {
                const user = userCredential;
                navigate("/");
                dispatch({ type: "LOGIN", payload: user });
                console.log(user);

                localStorage.setItem("user", JSON.stringify(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error logging in:", errorCode, errorMessage);

                // Handle different error codes
                if (errorCode === "auth/wrong-password") {
                    setError("Incorrect password. Please try again.");
                } else if (errorCode === "auth/user-not-found") {
                    setError("User not found. Please sign up.");
                } else {
                    setError("Error logging in. Please try again later.");
                }
            });
    }

    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="Login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="Login">
                <Card>
                    <CardHeader>
                        <CardTitle>Dashboard Login</CardTitle>
                        <CardDescription>
                            Enter your credentials below to access your
                            dashboard interface.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </CardContent>

                    <CardFooter>
                        <Button type="button" onClick={handleLogin}>
                            Log In
                        </Button>
                    </CardFooter>
                    <p className="error_message">{error}</p>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
