interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export default function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'dflsakjfçldskajfçldskajfçldsjfdsla',
                user: {
                    name: 'Wagner',
                    email: 'wagnersantos9778@gmail.com'
                }
            })
        }, 2000);
    });
}