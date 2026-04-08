import os

files = [
    'src/app/app.ts',
    'src/app/features/navbar/navbar.component.ts',
    'src/app/features/hero/hero.component.ts',
    'src/app/features/about/about.component.ts',
    'src/app/features/skills/skills.component.ts',
    'src/app/features/projects/projects.component.ts',
    'src/app/features/internship/internship.component.ts',
    'src/app/features/contact/contact.component.ts',
    'src/app/features/footer/footer.component.ts'
]

for fp in files:
    if not os.path.exists(fp):
        print(f"File not found: {fp}")
        continue
        
    with open(fp, 'r', encoding='utf-8') as f:
        src = f.read()

    # Find template
    start_temp = src.find('template: `')
    if start_temp == -1: 
        print(f"Template not found in {fp}")
        continue
    
    start_temp_content = start_temp + len('template: `')
    end_temp = src.find('`', start_temp_content)
    
    html = src[start_temp_content:end_temp]
    
    # Find styles
    start_style = src.find('styles: [`')
    end_style = -1
    is_array = True
    if start_style != -1:
        start_style_content = start_style + len('styles: [`')
        end_style = src.find('`]', start_style_content)
    else:
        start_style = src.find('styles: `')
        if start_style != -1:
            is_array = False
            start_style_content = start_style + len('styles: `')
            end_style = src.find('`', start_style_content)
            
    if start_style != -1 and end_style != -1:
        css = src[start_style_content:end_style]
    else:
        css = ""

    # Setup paths
    fn_ext = os.path.basename(fp)
    fn = fn_ext.replace('.ts', '')
    
    target_temp_full = src[start_temp:end_temp+1]
    new_src = src.replace(target_temp_full, f"templateUrl: './{fn}.html'")
    
    if start_style != -1 and end_style != -1:
        end_style_full = end_style + 2 if is_array else end_style + 1
        target_style_full = src[start_style:end_style_full]
        new_src = new_src.replace(target_style_full, f"styleUrl: './{fn}.scss'")
        
    # Write back ts
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(new_src)
        
    # Write html
    with open(os.path.join(os.path.dirname(fp), fn + '.html'), 'w', encoding='utf-8') as f:
        f.write(html.strip() + '\n')
        
    # Write scss 
    with open(os.path.join(os.path.dirname(fp), fn + '.scss'), 'w', encoding='utf-8') as f:
        f.write(css.strip() + '\n')

print("Done Refactoring!")
