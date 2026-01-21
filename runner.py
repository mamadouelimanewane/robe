
import subprocess
import sys

def run_command(cmd):
    try:
        process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        stdout, stderr = process.communicate()
        with open("output.log", "w", encoding="utf-8") as f:
            f.write("STDOUT:\n")
            f.write(stdout)
            f.write("\nSTDERR:\n")
            f.write(stderr)
            f.write(f"\nEXIT CODE: {process.returncode}\n")
        print("Output written to output.log")
    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        run_command(" ".join(sys.argv[1:]))
    else:
        print("No command specified")
