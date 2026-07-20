import { useForm } from "react-hook-form";
import { login } from "../services/authService.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) navigate("/dashboard", { replace: true })
    }, [])

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await login(data);
            const user = response.data

            console.log(user)

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("accessToken", user.accessToken);
            localStorage.setItem("refreshToken", user.refreshToken);
            navigate("/dashboard")
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Username"
                {...register("username",
                    { required: "Username is required", }
                )}
            />

            {errors.username && (
                <p>{errors.username.message}</p>
            )}



            <input
                type="password"
                placeholder="Password"
                {...register("password", {
                    required: "Password is required"
                })}
            />

            {errors.password && (
                <p>{errors.password.message}</p>
            )

            }

            <input
                type="number"
                placeholder="expire"
                {...register("expiresInMins")}
            />
            <br></br>
            <button type="submit">
                Login
            </button>
        </form >
    );
}

export default Login;