import React from 'react';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { UseFormReturn, FieldValues, FieldPath } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    name: keyof T;
    label?: string;
    placeholder?: string;
    description?: string;
}

const FormInput = <T extends FieldValues>({ form, name, label, placeholder, description }: InputProps<T>) => {
    return (
        <FormField
            control={form.control}
            name={name as  FieldPath<T>}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormInput;
