// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-j'

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbG1zeGRkbXN1ZGd2eWJxdmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MTU5ODcsImV4cCI6MTk2OTI5MTk4N30.B13a9It5ZaDTqYlbazv1DTDgYjLd3UYf7FxLUK8E77M";
const SUPABASE_URL = "https://hilmsxddmsudgvybqvln.supabase.co"

// Create a single supabase client for interacting with your database 
supabase = supabase.createClient(SUPABASE_URL, API_KEY);


const input = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
        .from('information')
        .insert([
            { food_name: input.value }
        ])


    console.log(data);
})

const getData = async e => {
    e.preventDefault()
    const { data, error } = await supabase
        .from('information')
        .select('food_name')
        .match({ id: 3 })

    document.getElementById('result').innerHTML = `
            <h1>Result: </h1>
            <li>${data[0].food_name}</li>     
        `

    console.log(data);
}