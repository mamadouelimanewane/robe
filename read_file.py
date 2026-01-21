
import os

def read_utf16_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-16') as f:
            print(f.read())
    except Exception as e:
        print(f"Error reading with utf-16: {e}")
        try:
             with open(filepath, 'r', encoding='utf-8') as f:
                print(f.read())
        except Exception as e2:
            print(f"Error reading with utf-8: {e2}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        read_utf16_file(sys.argv[1])
    else:
        print("No file specified")
