const convert_temp = () =>
{
    var c_temp = document.getElementById("c").value;
    if(c_temp)
    {
        var f_temp = (c_temp * 9/5) + 32;
        document.getElementById("f").value = f_temp;
    }
}

const convert_weight = () =>
{
    var kg_weight = document.getElementById("kg").value;
    if(kg_weight)
    {
        var lbs_weight = kg_weight * 2.205;
        document.getElementById("lbs").value = lbs_weight;
    }
}

const convert_dst = () =>
{
    var km_dst = document.getElementById("km").value;
    if(km_dst)
    {
        var m_dst = km_dst * 0.62137;
        document.getElementById("m").value = m_dst;
    }
}
