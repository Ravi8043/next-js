"use client";
import { signUpSchema } from "@/app/schemas/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"



const SignUpPage = () => {
    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues:{
            email:"",
            name:"",
            password:"",
        }
    });
  return (
    <Card>
        <CardHeader>
            <CardTitle>Sign-up</CardTitle>
            <CardDescription>create an account</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <FieldGroup>
                   <Controller name="name" control={form.control} render={({field, fieldState}) => (
                    <Field>
                        <FieldLabel>Name</FieldLabel>
                        <Input placeholder="John doe" {...field}/>
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]}/>
                        )}
                    </Field>
                   )} />
                </FieldGroup>
            </form>
        </CardContent>
    </Card>
  )
}

export default SignUpPage
