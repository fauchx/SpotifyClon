<script lang="ts">
    const currenTime = new Date()
    const currentHour = currenTime.getHours()
    let greeting = ""
    if (currentHour < 12){
        greeting = "Buenos dias"
    } else if (currentHour < 18){
        greeting = "Buenas tardes"
    } else{
        greeting = "Buenas noches"
    }
</script>
<h1 class="text-3xl font-bold">{greeting}</h1>