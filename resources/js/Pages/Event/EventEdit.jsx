import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function EventEdit() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        // <>
        //     <h1>Hello Event Create</h1>
        // </>
        <GuestLayout>
            {/* <Head title="Register" /> */}
            <h1 className='text-center'>Event Edit</h1>
            <form onSubmit={submit}>
                {/* Event Name */}
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                {/* Event Name */}


                {/* Event Type */}
                <div className="mt-4">
                    <InputLabel htmlFor="type" value="Type" />

                    <TextInput
                        id="type"
                        name="type"
                        value={data.type}
                        className="mt-1 block w-full"
                        autoComplete="type"
                        isFocused={true}
                        onChange={(e) => setData('type', e.target.value)}
                        required
                    />

                    <InputError message={errors.type} className="mt-2" />
                </div>
                {/* Event Type */}


                


                {/* Event Date */}
                <div className="mt-4">
                    <InputLabel htmlFor="date" value="Date" />

                    <TextInput
                        id="date"
                        name="date"
                        value={data.date}
                        className="mt-1 block w-full"
                        autoComplete="date"
                        isFocused={true}
                        onChange={(e) => setData('date', e.target.value)}
                        required
                    />

                    <InputError message={errors.date} className="mt-2" />
                </div>
                {/* Event Date */}

                {/* Event Time */}
                <div className="mt-4">
                    <InputLabel htmlFor="time" value="Time" />

                    <TextInput
                        id="time"
                        name="time"
                        value={data.time}
                        className="mt-1 block w-full"
                        autoComplete="time"
                        isFocused={true}
                        onChange={(e) => setData('time', e.target.value)}
                        required
                    />

                    <InputError message={errors.time} className="mt-2" />
                </div>
                {/* Event Time */}

                {/* Event Capacity */}
                <div className="mt-4">
                    <InputLabel htmlFor="capacity" value="Capacity" />
                    
                    <TextInput
                        type="number"
                        id="capacity"
                        name="capacity"
                        value={data.capacity}
                        className="mt-1 block w-full"
                        autoComplete="capacity"
                        isFocused={true}
                        onChange={(e) => setData('capacity', e.target.value)}
                        required
                    />

                    <InputError message={errors.capacity} className="mt-2" />
                </div>
                {/* Event Capacity */}


                {/* Event Avater */}
                <div className="mt-4">
                    <InputLabel htmlFor="avater" value="Avater" />
                    
                    <TextInput
                        type="file"
                        id="avater"
                        name="avater"
                        value={data.avater}
                        className="mt-1 block w-full"
                        autoComplete="avater"
                        isFocused={true}
                        onChange={(e) => setData('avater', e.target.value)}
                        required
                    />

                    <InputError message={errors.avater} className="mt-2" />
                </div>
                {/* Event Avater */}


                {/* Event Description */}
                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Description" />
                    
                    <TextInput
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>
                {/* Event Description */}


                {/* Event Price */}
                <div className="mt-4">
                    <InputLabel htmlFor="price" value="Price" />
                    
                    <TextInput
                        type="number"
                        id="price"
                        name="price"
                        value={data.price}
                        className="mt-1 block w-full"
                        autoComplete="price"
                        isFocused={true}
                        onChange={(e) => setData('price', e.target.value)}
                        required
                    />

                    <InputError message={errors.price} className="mt-2" />
                </div>
                {/* Event Price */}

                {/* Event User Type */}
                <div className="mt-4">
                    <InputLabel htmlFor="usertype" value="User Type" />
                    
                    <TextInput
                        id="usertype"
                        name="usertype"
                        value={data.usertype}
                        className="mt-1 block w-full"
                        autoComplete="usertype"
                        isFocused={true}
                        onChange={(e) => setData('usertype', e.target.value)}
                        required
                    />

                    <InputError message={errors.usertype} className="mt-2" />
                </div>
                {/* Event User Type */}


                {/* Event Location */}
                <div className="mt-4">
                    <InputLabel htmlFor="location" value="Location" />

                    <textarea
                        name="location"
                        id="location"
                        value={data.location}
                        className="mt-1 block w-full"
                        cols="20" rows="10"
                        isFocused={true}
                        onChange={(e) => setData('location', e.target.value)}
                        required
                    ></textarea>

                    {/* <TextInput
                        id="location"
                        name="location"
                        value={data.location}
                        className="mt-1 block w-full"
                        autoComplete="location"
                        isFocused={true}
                        onChange={(e) => setData('location', e.target.value)}
                        required
                    /> */}

                    <InputError message={errors.location} className="mt-2" />
                </div>
                {/* Event Location */}
                

                <div className="flex items-center justify-end mt-4">
                    {/* <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link> */}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Create
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
