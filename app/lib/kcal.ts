export function set_blue_kcal(value: number){
    var process = java.lang.Runtime.getRuntime().exec('su');
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo " + value +" > /sys/module/msm_drm/parameters/kcal_blue\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
}

export function get_blue_kcal(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/module/msm_drm/parameters/kcal_blue\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
    var line = new java.lang.String();
    // @ts-ignore
    while((line=reader.readLine())!=null)o+=line;
    return o;  // We need to get a maximium 100 so scale the number, 256 is about 100
}

export function set_red_kcal(value: number){
    var process = java.lang.Runtime.getRuntime().exec('su');
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo " + value +" > /sys/module/msm_drm/parameters/kcal_red\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
}

export function get_red_kcal(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/module/msm_drm/parameters/kcal_red\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
    var line = new java.lang.String();
    // @ts-ignore
    while((line=reader.readLine())!=null)o+=line;
    return o;  // We need to get a maximium 100 so scale the number, 256 is about 100
}

export function set_green_kcal(value: number){
    var process = java.lang.Runtime.getRuntime().exec('su');
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo " + value +" > /sys/module/msm_drm/parameters/kcal_green\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
}

export function get_green_kcal(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/module/msm_drm/parameters/kcal_green\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
    var line = new java.lang.String();
    // @ts-ignore
    while((line=reader.readLine())!=null)o+=line;
    return o;
}

export function set_contrast_kcal(value: number){
    var process = java.lang.Runtime.getRuntime().exec('su');
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo " + value +" > /sys/module/msm_drm/parameters/kcal_cont\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
}

export function get_contrast_kcal(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/module/msm_drm/parameters/kcal_cont\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
    var line = new java.lang.String();
    // @ts-ignore
    while((line=reader.readLine())!=null)o+=line;
    return o;
}

export function set_saturation_kcal(value: number){
    var process = java.lang.Runtime.getRuntime().exec('su');
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo " + value +" > /sys/module/msm_drm/parameters/kcal_sat\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
}

export function get_saturation_kcal(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/module/msm_drm/parameters/kcal_sat\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
    var line = new java.lang.String();
    // @ts-ignore
    while((line=reader.readLine())!=null)o+=line;
    return o;
}

export function set_value_kcal(value: number){
    var process = java.lang.Runtime.getRuntime().exec('su');
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo " + value +" > /sys/module/msm_drm/parameters/kcal_val\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
}

export function get_value_kcal(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/module/msm_drm/parameters/kcal_val\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
    var line = new java.lang.String();
    // @ts-ignore
    while((line=reader.readLine())!=null)o+=line;
    return o;
}

export function set_hue_kcal(value: number){
    var process = java.lang.Runtime.getRuntime().exec('su');
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo " + value +" > /sys/module/msm_drm/parameters/kcal_hue\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
}

export function get_hue_kcal(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/module/msm_drm/parameters/kcal_hue\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
    var line = new java.lang.String();
    // @ts-ignore
    while((line=reader.readLine())!=null)o+=line;
    return o;
}