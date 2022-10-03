// Get 600hz mode for Oplus model
export function get_oplus_touchrate() {
  var o = new java.lang.String();
  var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
  let outputStream = new java.io.DataOutputStream(process.getOutputStream());
  outputStream.writeBytes("cat /proc/touchpanel/game_switch_enable\n");
  outputStream.flush();
  outputStream.writeBytes("exit\n");
  outputStream.flush();
  process.waitFor();
  var reader = new java.io.BufferedReader(
    new java.io.InputStreamReader(process.getInputStream())
  );
  var line = new java.lang.String();
    // @ts-ignore
  while ((line = reader.readLine()) != null) o += line;
  return o;
}

// Switch Touchrate
export function touchrate_switch(touchrate: boolean) {
  if (!touchrate) {
    var process = java.lang.Runtime.getRuntime().exec("su");
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo 1 > /proc/touchpanel/game_switch_enable\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
  } else {
    var process = java.lang.Runtime.getRuntime().exec("su");
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("echo 0 > /proc/touchpanel/game_switch_enable\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
  }
}

// Switch fast charge option
export function fsync_switch(fsync: boolean) {
  if (!fsync) {
    var process = java.lang.Runtime.getRuntime().exec("su");
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes(
      "echo 1 > /sys/kernel/fast_charge/force_fast_charge\n"
    );
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
  } else {
    var process = java.lang.Runtime.getRuntime().exec("su");
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes(
      "echo 0 > /sys/kernel/fast_charge/force_fast_charge\n"
    );
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
  }
}

// Get the status of HBM(Auto brightness)
export function get_hbm(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/kernel/oplus_display/hbm\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(
      new java.io.InputStreamReader(process.getInputStream())
    );
    var line = new java.lang.String();
    // @ts-ignore
    while ((line = reader.readLine()) != null) o += line;
    
    return o;
}

export function hdm_switch(hdm: boolean){
    if (!hdm) {
        var process = java.lang.Runtime.getRuntime().exec("su");
        let outputStream = new java.io.DataOutputStream(process.getOutputStream());
        outputStream.writeBytes(
          "echo 1 > /sys/kernel/oplus_display/hbm\n"
        );
        outputStream.flush();
        outputStream.writeBytes("exit\n");
        outputStream.flush();
        process.waitFor();
      } else {
        var process = java.lang.Runtime.getRuntime().exec("su");
        let outputStream = new java.io.DataOutputStream(process.getOutputStream());
        outputStream.writeBytes(
          "echo 0 > /sys/kernel/oplus_display/hbm\n"
        );
        outputStream.flush();
        outputStream.writeBytes("exit\n");
        outputStream.flush();
        process.waitFor();
      }  
}

// Get state of d2tw
export function get_dt2w(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /proc/touchpanel/double_tap_enable\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(
      new java.io.InputStreamReader(process.getInputStream())
    );
    var line = new java.lang.String();
    // @ts-ignore
    while ((line = reader.readLine()) != null) o += line;
    
    return o;
}

export function d2tw_switch(d2tw: boolean){
  if (!d2tw) {
      var process = java.lang.Runtime.getRuntime().exec("su");
      let outputStream = new java.io.DataOutputStream(process.getOutputStream());
      outputStream.writeBytes(
        "echo 1 > /proc/touchpanel/double_tap_enable\n"
      );
      outputStream.flush();
      outputStream.writeBytes("exit\n");
      outputStream.flush();
      process.waitFor();
    } else {
      var process = java.lang.Runtime.getRuntime().exec("su");
      let outputStream = new java.io.DataOutputStream(process.getOutputStream());
      outputStream.writeBytes(
        "echo 0 > /proc/touchpanel/double_tap_enable\n"
      );
      outputStream.flush();
      outputStream.writeBytes("exit\n");
      outputStream.flush();
      process.waitFor();
    }  
}

// Get state of DC Dimming
export function get_dcd(){
    var o = new java.lang.String();
    var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
    let outputStream = new java.io.DataOutputStream(process.getOutputStream());
    outputStream.writeBytes("cat /sys/kernel/oplus_display/dimlayer_bl_en\n");
    outputStream.flush();
    outputStream.writeBytes("exit\n");
    outputStream.flush();
    process.waitFor();
    var reader = new java.io.BufferedReader(
      new java.io.InputStreamReader(process.getInputStream())
    );
    var line = new java.lang.String();
    // @ts-ignore
    while ((line = reader.readLine()) != null) o += line;
    
    return o;
}

// DC dimming switch

export function dcd_switch(dcd: boolean){
  if (!dcd) {
      var process = java.lang.Runtime.getRuntime().exec("su");
      let outputStream = new java.io.DataOutputStream(process.getOutputStream());
      outputStream.writeBytes(
        "echo 1 1 > /sys/kernel/oplus_display/dimlayer_bl_en\n"
      );
      outputStream.flush();
      outputStream.writeBytes("exit\n");
      outputStream.flush();
      process.waitFor();
    } else {
      var process = java.lang.Runtime.getRuntime().exec("su");
      let outputStream = new java.io.DataOutputStream(process.getOutputStream());
      outputStream.writeBytes(
        "echo 0 0 > /sys/kernel/oplus_display/dimlayer_bl_en\n"
      );
      outputStream.flush();
      outputStream.writeBytes("exit\n");
      outputStream.flush();
      process.waitFor();
    }  
}

export function get_adrenoboost(){
  var o = new java.lang.String();
  var process = java.lang.Runtime.getRuntime().exec("su"); // SU is not necessary
  let outputStream = new java.io.DataOutputStream(process.getOutputStream());
  // Maybe change this path?
  outputStream.writeBytes("cat /sys/class/devfreq/3d00000.qcom,kgsl-3d0/adrenoboost\n");
  outputStream.flush();
  outputStream.writeBytes("exit\n");
  outputStream.flush();
  process.waitFor();
  var reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream()));
  var line = new java.lang.String();
  // @ts-ignore
  while((line=reader.readLine())!=null)o+=line;
  console.log(o);
  return o;
}

export function set_adrenoboost(adrenoboost: boolean){
  var process = java.lang.Runtime.getRuntime().exec('su');
  let outputStream = new java.io.DataOutputStream(process.getOutputStream());
  // Maybe change this path?
  if(!adrenoboost){
      outputStream.writeBytes("echo 1 > /sys/class/devfreq/3d00000.qcom,kgsl-3d0/adrenoboost\n");
  }else{
      outputStream.writeBytes("echo 0 > /sys/class/devfreq/3d00000.qcom,kgsl-3d0/adrenoboost\n");
  }
  outputStream.flush();
  outputStream.writeBytes("exit\n");
  outputStream.flush();
  process.waitFor();
}