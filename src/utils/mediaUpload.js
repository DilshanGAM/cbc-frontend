import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZHlqZ2thbnVmYWJiZ2dxY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzOTQ5NjYsImV4cCI6MjA1MDk3MDk2Nn0.l7ut2UI8Z1AMxQeSQCQPBHDDlq2HsvLcbP4sxQ-t02E`;

const url = "https://jhdyjgkanufabbggqcxc.supabase.co";

export default function uploadMediaToSupabase(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("File not added");
    }
    let fileName = file.name;
    const extension = fileName.split(".")[fileName.split(".").length - 1];

    const supabase = createClient(url, key);

    const timestamp = new Date().getTime();

    fileName = timestamp +file.name+ "." + extension;

    supabase.storage.from("images").upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    }).then(()=>{
      const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
      resolve(publicUrl);
    }).catch((err)=>{
      reject(err);
    });
  });
}


