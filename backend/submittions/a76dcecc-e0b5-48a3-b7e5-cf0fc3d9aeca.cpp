#include<bits/stdc++.h>
#define ll long long
using namespace std;
ll gcd(ll a, ll b)
{
    if (b==0) return a;
    else return gcd(b, a%b);
}
ll lcm(ll a, ll b)
{
    return (a*b)/gcd(a,b);
}
int main()
{
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    
    int t;
    cin>>t;
    while (t--)
    {
        int N;
        cin>>N;
        ll A[N], sneak=LLONG_MAX;
        for (int i=0; i<N; i++) cin>>A[i];
        for (int i=0; i<N; i++)
        {
            for (int j=i+1; j<N; j++)
            {
                sneak=min(sneak, lcm(A[i], A[j]));
            }
        }
        cout<<sneak<<"\n";
    }
    return 0;
}